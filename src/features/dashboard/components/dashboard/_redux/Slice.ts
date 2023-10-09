import { createSlice } from '@reduxjs/toolkit';
import { callTypes } from '@/config/action';
import { initialState } from '@/resources/InitialsState';

export const DashboardSlice = createSlice({
  name: 'dashboard',
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
      state.entities = action.payload;
      state.actionsLoading = false;
      state.error = null;
    },
    post: (state, action) => {
      state.listLoading = false;
      state.statements = action.payload;
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
