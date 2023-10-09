import { useQuery } from '@tanstack/react-query';
import { getUserData, getUserPost } from '../Crud';

export function useGetUser(id: string) {
  const { data, isLoading } = useQuery(
    ['requests', id],
    () => getUserData(id),
    {
      staleTime: 600000, // 10 minutes
      cacheTime: 7200000, // 2 hour
    }
  );
  return {
    userData: data,
    isLoading,
  };
}

export function useGetUserPost(id: string) {
  const { data, isLoading, refetch } = useQuery(['request', id], () =>
    getUserPost(id)
  );
  return {
    userPost: data,
    isLoading,
    refetch,
  };
}
