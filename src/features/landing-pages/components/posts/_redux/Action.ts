import { callTypes } from '@/config/action';
import { PostSlice } from './Slice';

const { actions } = PostSlice;

export const fetchAllData =
  (query?: any) =>
  (
    dispatch: (arg0: { payload: 'posts/startCall' | 'posts/posts' }) => void
  ) => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    dispatch(actions.posts(query));
  };
