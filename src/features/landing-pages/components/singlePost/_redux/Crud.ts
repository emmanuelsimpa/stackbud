import { axios } from '@/lib/axios';

export function getData(id: string) {
  return axios.get(`/post/${id}`);
}
