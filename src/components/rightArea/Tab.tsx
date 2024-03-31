import React, { useState } from 'react';
import * as Styled from './_styled';
import { CoinList } from './list/CoinList';

export const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Styled.TabContainer>
        <Styled.TabItem onClick={() => tabClick(0)} active={activeTab === 0}>
          원화
        </Styled.TabItem>
        <Styled.TabItem onClick={() => tabClick(1)} active={activeTab === 1}>
          관심
        </Styled.TabItem>
      </Styled.TabContainer>
      <CoinList />
    </div>
  );
};
