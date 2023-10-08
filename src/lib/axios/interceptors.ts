import { api_id } from '@/config/url';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export function rejectErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

export function RequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = api_id;
  if (token) {
    config.headers['app-id'] = token;
  }
  return config;
}
