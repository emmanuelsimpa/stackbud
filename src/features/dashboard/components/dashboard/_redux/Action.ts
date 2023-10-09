import { createAsyncThunk } from '@reduxjs/toolkit';
import { callTypes } from '@/config/action';
import { DashboardSlice } from './Slice';

const { actions } = DashboardSlice;

export const fetchUserData = createAsyncThunk(
  'dashboard/fetchUserData',
  async (query: any, { dispatch }) => {
    try {
      dispatch(actions.startCall({ callType: callTypes.list }));
      dispatch(actions.user(query));
    } catch (error) {
      dispatch(actions.catchError({ type: 'dashboard/user', error }));
    }
  }
);

export const fetchUserPost = createAsyncThunk(
  'dashboard/fetchUserPost',
  async (query: any, { dispatch }) => {
    try {
      dispatch(actions.startCall({ callType: callTypes.list }));
      dispatch(actions.post(query));
    } catch (error) {
      dispatch(actions.catchError({ type: 'dashboard/post', error }));
    }
  }
);
