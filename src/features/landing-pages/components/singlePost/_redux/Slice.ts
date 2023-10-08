import { callTypes } from '@/config/action';
import { initialState } from '@/resources/InitialsState';
import { createSlice } from '@reduxjs/toolkit';

export const SinglePostSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    posts: (state, action) => {
      state.listLoading = false;
      state.entities = action.payload;
      state.actionsLoading = false;
      state.error = null;
    },
  },
});
