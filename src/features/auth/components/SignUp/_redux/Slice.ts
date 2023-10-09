import { callTypes } from '@/config/action';
import { initialState } from '@/resources/InitialsState';
import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    user: (state, action) => {
      state.listLoading = false;
      state.user = action.payload;
      state.actionsLoading = false;
      state.error = null;
    },
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
  },
});
