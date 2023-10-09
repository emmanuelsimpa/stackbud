import { callTypes } from '@/config/action';
import { AuthSlice } from './Slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { actions } = AuthSlice;

export const postUserData = createAsyncThunk(
  'auth/user',
  async (query: any, { dispatch }) => {
    try {
      dispatch(actions.startCall({ callType: callTypes.list }));
      dispatch(actions.user(query));
    } catch (error) {
      dispatch(actions.catchError({ type: 'auth/user', error }));
    }
  }
);
