import { createSlice } from '@reduxjs/toolkit';
import { MarketAll, Ticker } from '../interface';

interface InitialState {
  marketData: MarketAll[];
  tickerData: Ticker[];
  socketTickerData: Ticker[];
}

const initialState: InitialState = {
  marketData: [],
  tickerData: [],
  socketTickerData: [],
};

const upbitSlice = createSlice({
  name: 'upbit',
  initialState,
  reducers: {
    getMarketData(state, action) {
      state.marketData = action.payload.marketData;
    },
    getTickerData(state, action) {
      state.tickerData = action.payload.tickerData;
    },
    // getSocketTickerData(state, action) {
    //   state.socketTickerData = action.payload.socketTickerData;
    // },
  },
});

export const upbitSliceActions = upbitSlice.actions;
export default upbitSlice.reducer;
