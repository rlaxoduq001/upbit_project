import React, { useEffect, useState } from 'react';
import { CoinListItem } from './CoinListItem';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { upbitAction } from '../../../redux/action/upbitAction';
import { useSelector } from 'react-redux';

export const CoinList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const marketData = useSelector((state: RootState) => state.upbit.marketData);
  const tickerData = useSelector((state: RootState) => state.upbit.tickerData);

  useEffect(() => {
    dispatch(upbitAction.getUpbitMarketData());
  }, []);

  return (
    <div>
      <div>
        {marketData.map((market, index) => {
          const ticker = tickerData[index];
          return <CoinListItem marketData={market} tickerData={ticker} />;
        })}
      </div>
    </div>
  );
};
