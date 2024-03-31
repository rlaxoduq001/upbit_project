import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import * as Styled from './styled';

export const Layout = () => {
  return (
    <Styled.Container>
      <Header />
      <Styled.ContainerWrapper>
        <Outlet />
      </Styled.ContainerWrapper>
    </Styled.Container>
  );
};
