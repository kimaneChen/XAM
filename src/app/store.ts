import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logReducer from './slices/loginfo/loginSlice';
import usersListReducer from './slices/userinfo/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loggedInfo: logReducer,
    usersList: usersListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
