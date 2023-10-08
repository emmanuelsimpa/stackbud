import { callTypes } from '@/config/action';
import { DashboardSlice } from './Slice';

const { actions } = DashboardSlice;

export const fetchUserData =
  (query?: any) =>
  (
    dispatch: (arg0: {
      payload: 'dashboard/startCall' | 'dashboard/posts';
    }) => void
  ) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    dispatch(actions.user(query));
  };

export const fetchUserPost =
  (query?: any) =>
  (
    dispatch: (arg0: {
      payload: 'dashboard/startCall' | 'dashboard/posts';
    }) => void
  ) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    dispatch(actions.post(query));
  };
