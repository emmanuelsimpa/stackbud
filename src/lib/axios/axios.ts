import Axios from 'axios';

import { RequestInterceptor, rejectErrorInterceptor } from './interceptors';
import { api } from '@/config/url';

export const axios = Axios.create({
  baseURL: api,
});

axios.interceptors.request.use(RequestInterceptor, rejectErrorInterceptor);
