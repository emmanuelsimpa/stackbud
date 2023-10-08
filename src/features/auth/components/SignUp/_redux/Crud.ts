import { axios } from '@/lib/axios';

export function createUser(payload: any) {
  return axios.post(`/user/create`, payload);
}
