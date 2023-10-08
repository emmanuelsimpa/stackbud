import { axios } from '@/lib/axios';

export function getUserData(id: string) {
  return axios.get(`/user/${id}`);
}

export function getUserPost(id: string) {
  return axios.get(`/user/${id}/post`);
}

export function createUserPost(data: any) {
  return axios.post(`/post/create`, data);
}
export function deletUserPost(id: any) {
  return axios.delete(`/post/${id}`);
}
