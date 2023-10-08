import { callTypes } from '@/config/action';
import { SinglePostSlice } from './Slice';

const { actions } = SinglePostSlice;

export const fetchSingleData =
  (query?: any) =>
  (dispatch: (arg0: { payload: 'post/startCall' | 'post/posts' }) => void) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    dispatch(actions.posts(query));
  };
