import { callTypes } from '@/config/action';
import { PostSlice } from './Slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { actions } = PostSlice;

export const fetchAllData = createAsyncThunk(
  'posts/posts',
  async (query: any, { dispatch }) => {
    try {
      dispatch(actions.startCall({ callType: callTypes.list }));
      dispatch(actions.posts(query));
    } catch (error) {
      dispatch(actions.catchError({ type: 'posts/posts', error }));
    }
  }
);
