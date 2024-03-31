import styled from '@emotion/styled';

// Search
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 20px;
  padding: 10px;
`;

export const BorderLine = styled.div`
  background-color: #d5d6dc;
  height: 1px;
`;

// Tab
export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #333333;
`;

export const TabItem = styled.div<{ active: boolean }>`
  width: 50%;
  text-align: center;
  padding: 10px;
  color: ${({ active }) => (active ? 'blue' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-bottom: ${({ active }) => (active ? '3px solid blue' : '')};
`;
