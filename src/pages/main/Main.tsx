import React from 'react';
import * as Styled from './styled';
import { RightContent } from '../../components/rightArea/RightContent';

export const Main = () => {
  return (
    <Styled.Container>
      <Styled.LeftContainer>1</Styled.LeftContainer>
      <Styled.RightContainer>
        <RightContent></RightContent>
      </Styled.RightContainer>
    </Styled.Container>
  );
};
