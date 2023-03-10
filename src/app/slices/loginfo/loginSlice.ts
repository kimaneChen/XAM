import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';

export interface activeUserState {
  name: string | null;
  status: 'idle' | 'loading' | 'failed' | 'logged' ;
}

const initialState: activeUserState = {
  name: null,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'loggedInfo',
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = 'test';
      state.status = 'logged'
    },
    logout: (state) => {
      state.name=null;
      state.status='idle';
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.

});

export const { login, logout } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const loggedUser = (state: RootState) => state.loggedInfo.name;

export default counterSlice.reducer;
