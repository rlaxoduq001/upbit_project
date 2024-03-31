import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import React, { useState } from 'react';
import { MarketAll, Ticker } from '../../../redux/interface';

interface Props {
  marketData: MarketAll;
  tickerData: Ticker;
}

export const CoinListItem: React.FC<Props> = ({ marketData, tickerData }) => {
  if (!marketData || !tickerData) {
    return null;
  }

  // 숫자를 백만 포맷팅/콤마 포함
  const formatToMillion = (value: number) => {
    const million = value / 1000000;
    return (
      new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 0 }).format(
        million,
      ) + '백만'
    );
  };

  return (
    <div>
      <Styled.CoinListContainer>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={regularHeart} />
        </Styled.IconWrapper>
        <Styled.CoinNameWrapper>
          {marketData.korean_name}
        </Styled.CoinNameWrapper>
        <Styled.CoinCurrentPriceWrapper>
          {tickerData.trade_price}
        </Styled.CoinCurrentPriceWrapper>
        <Styled.CoinComparedToPreviousWrapper>
          {(tickerData.signed_change_rate * 100).toFixed(2)}
        </Styled.CoinComparedToPreviousWrapper>
        <Styled.CoinTransactionAmountWrapper>
          {formatToMillion(tickerData.acc_trade_price_24h)}
        </Styled.CoinTransactionAmountWrapper>
      </Styled.CoinListContainer>
    </div>
  );
};
