import { combineReducers } from '@reduxjs/toolkit';

import { PostSlice } from '@/features/landing-pages/components/posts/_redux/Slice';
import { SinglePostSlice } from '@/features/landing-pages/components/singlePost/_redux/Slice';
import { AuthSlice } from '@/features/auth/components/SignUp/_redux/Slice';
import { DashboardSlice } from '@/features/dashboard/components/dashboard/_redux/Slice';

export const rootReducer = combineReducers({
  posts: PostSlice.reducer,
  post: SinglePostSlice.reducer,
  auth: AuthSlice.reducer,
  dashboard: DashboardSlice.reducer,
});
