import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import React from 'react';
import { MarketAll, Ticker } from '../../../redux/interface';
import { formatToMillion, formatNumberWithCommas } from '../../../utils/utils';

interface Props {
  marketData: MarketAll;
  tickerData: Ticker;
}

export const CoinListItem: React.FC<Props> = ({ marketData, tickerData }) => {
  if (!marketData || !tickerData) {
    return null;
  }

  return (
    <div>
      <Styled.CoinListContainer>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={regularHeart} />
        </Styled.IconWrapper>
        <Styled.CoinNameWrapper>
          {marketData.korean_name}
        </Styled.CoinNameWrapper>
        <Styled.CoinCurrentPriceWrapper changeProp={tickerData.change}>
          {formatNumberWithCommas(tickerData.trade_price)}
        </Styled.CoinCurrentPriceWrapper>
        <Styled.CoinComparedToPreviousWrapper changeProp={tickerData.change}>
          {(tickerData.signed_change_rate * 100).toFixed(2)}%
        </Styled.CoinComparedToPreviousWrapper>
        <Styled.CoinTransactionAmountWrapper>
          {formatToMillion(tickerData.acc_trade_price_24h)}
        </Styled.CoinTransactionAmountWrapper>
      </Styled.CoinListContainer>
    </div>
  );
};
