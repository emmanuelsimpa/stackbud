import { axios } from '@/lib/axios';

export function getData() {
  return axios.get(`/post`);
}
