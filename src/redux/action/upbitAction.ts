import api from '../api';
import { Dispatch } from '@reduxjs/toolkit';
import { upbitSliceActions } from '../reducer/upbitReducer';

const getUpbitMarketData = () => async (dispatch: Dispatch) => {
  try {
    const marketData = await api.get('/market/all?isDetails=true');

    // KRW만 추려내기
    const coinData = marketData.data.filter((data: any) => {
      return data.market.indexOf('KRW-') != -1;
    });
    dispatch(upbitSliceActions.getMarketData({ marketData: coinData }));

    // market name만 추리기
    const marketFind = coinData.map((data: any) => data.market);

    // picker 조회에 필요한 스트링값 구하기
    const param = marketFind.join(',');

    const tickerData = await api.get('/ticker', {
      params: { markets: param },
    });
    dispatch(upbitSliceActions.getTickerData({ tickerData: tickerData.data }));

    // ***********************************************************
  } catch (error) {}
};

export const upbitAction = {
  getUpbitMarketData,
};
