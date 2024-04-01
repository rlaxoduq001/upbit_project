import api from '../api';
import { Dispatch } from '@reduxjs/toolkit';
import { upbitSliceActions } from '../reducer/upbitReducer';
import { Ticker, MarketAll } from '../interface';

const getUpbitMarketData = () => async (dispatch: Dispatch) => {
  try {
    const marketData = await api.get('/market/all?isDetails=true');

    // KRW만 추려내기
    const coinData = marketData.data.filter((data: MarketAll) => {
      return data.market.indexOf('KRW-') != -1;
    });
    dispatch(upbitSliceActions.getMarketData({ marketData: coinData }));

    // market name만 가져오기 (조회)
    const codes = coinData.map((data: MarketAll) => data.market);
    // picker 조회에 필요한 스트링값 구하기
    const param = codes.join(',');
    const tickerData = await api.get('/ticker', {
      params: { markets: param },
    });
    dispatch(upbitSliceActions.getTickerData({ tickerData: tickerData.data }));
  } catch (error) {}
};

const initWebSocket =
  (socket: WebSocket, tickerData: any) => async (dispatch: Dispatch) => {
    try {
      socket.onmessage = async (event: any) => {
        const ticker = await new Response(event.data).json();
        const index = tickerData.findIndex((item) => item.code === ticker.code);
        console.log(index);

        if (index !== -1) {
          tickerData[index] = { ...tickerData[index], ...ticker };
        } else {
          tickerData.push(ticker);
        }
      };
    } catch (error) {}
  };

export const upbitAction = {
  getUpbitMarketData,
  initWebSocket,
};
