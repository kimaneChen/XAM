import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';

import { users } from '../../../data/users_data';

export interface userProps  {
  branchId: number;
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
};

export interface usersListState {
  usersList: userProps[];
}

const initialState: usersListState = {
  usersList:  users,
};

export const usersListSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.usersList.push(action.payload)
    },
    remove: (state, action) => {
      state.usersList.splice(1) // Change this part
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.

});

export const { add, remove } = usersListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const usersList = (state: RootState) => state.usersList.usersList;

export default usersListSlice.reducer;