import { callTypes } from '@/config/action';
import { AuthSlice } from './Slice';

const { actions } = AuthSlice;

export const postUserData =
  (query?: any) =>
  (dispatch: (arg0: { payload: 'auth/startCall' | 'auth/posts' }) => void) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    dispatch(actions.user(query));
  };
