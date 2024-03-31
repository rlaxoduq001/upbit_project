import styled from '@emotion/styled';

export const CoinListContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 50px;
  padding: 0px 10px;
  font-weight: 500;
  word-break: break-all;
`;

export const IconWrapper = styled.div`
  flex-basis: 10%;
`;

export const CoinNameWrapper = styled.div`
  flex-basis: 30%;
`;
export const CoinCurrentPriceWrapper = styled.div<{ changeProp: string }>`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  color: ${({ changeProp }) =>
    changeProp === 'EVEN'
      ? '#000000'
      : changeProp === 'RISE'
      ? '#FF0000'
      : changeProp === 'FALL'
      ? '#0000FF'
      : 'inherit'};
`;

export const CoinComparedToPreviousWrapper = styled.div<{ changeProp: string }>`
  flex: 10%;
  display: flex;
  justify-content: flex-end;
  color: ${({ changeProp }) =>
    changeProp === 'EVEN'
      ? '#000000'
      : changeProp === 'RISE'
      ? '#FF0000'
      : changeProp === 'FALL'
      ? '#0000FF'
      : 'inherit'};
`;

export const CoinTransactionAmountWrapper = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
`;
