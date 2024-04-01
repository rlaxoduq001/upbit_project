import React, { useEffect, useRef, useState } from 'react';
import { CoinListItem } from './CoinListItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { upbitAction } from '../../../redux/action/upbitAction';
import { useSelector } from 'react-redux';
import * as Styled from './styled';

export const CoinList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const marketData = useSelector((state: RootState) => state.upbit.marketData);
  const tickerData = useSelector((state: RootState) => state.upbit.tickerData);
  const socketTickerData = useSelector(
    (state: RootState) => state.upbit.socketTickerData,
  );

  // console.log(socketTickerData);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    console.log('첫번째');

    dispatch(upbitAction.getUpbitMarketData());
  }, [dispatch]);

  useEffect(() => {
    console.log('두번째');

    const socket = new WebSocket('wss://api.upbit.com/websocket/v1');
    const codes = marketData.map((data: any) => data.market);

    socket.onopen = () => {
      console.log('opened');
      const param = `${JSON.stringify([
        { ticket: 'test' },
        { type: 'ticker', codes },
      ])}`;
      socket.send(param);
      socket.binaryType = 'arraybuffer';
    };

    dispatch(upbitAction.initWebSocket(socket, tickerData));

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, [marketData]);

  return (
    <Styled.CoinListContainer>
      {marketData.map((market, index) => {
        const ticker = tickerData[index];
        return (
          <CoinListItem key={index} marketData={market} tickerData={ticker} />
        );
      })}
    </Styled.CoinListContainer>
  );
};
