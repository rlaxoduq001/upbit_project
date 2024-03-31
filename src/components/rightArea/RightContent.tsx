import React from 'react';
import * as Styled from './_styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tab } from './Tab';

export const RightContent: React.FC = () => {
  return (
    <div>
      <Styled.SearchWrapper>
        <Styled.SearchInput type="search" placeholder="코인명/심볼 검색" />
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: '#003597', padding: '10px' }}
        />
      </Styled.SearchWrapper>
      <Styled.BorderLine />
      <Tab></Tab>
    </div>
  );
};
