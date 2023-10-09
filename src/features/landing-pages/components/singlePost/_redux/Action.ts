import { callTypes } from '@/config/action';
import { SinglePostSlice } from './Slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { actions } = SinglePostSlice;

export const fetchSingleData = createAsyncThunk(
  'post/posts',
  async (query: any, { dispatch }) => {
    try {
      dispatch(actions.startCall({ callType: callTypes.list }));
      dispatch(actions.posts(query));
    } catch (error) {
      dispatch(actions.catchError({ type: 'post/posts', error }));
    }
  }
);
