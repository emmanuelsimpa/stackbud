import { axios } from '@/lib/axios';

export function getData(page?: number) {
  return axios.get(`/post?page=${page}`);
}
