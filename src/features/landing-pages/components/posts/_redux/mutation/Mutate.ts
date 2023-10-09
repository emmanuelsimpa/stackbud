import { useQuery } from '@tanstack/react-query';
import { getData } from '../Crud';

export function useGetPost(page?: number) {
  const { data, isLoading, refetch } = useQuery(
    ['requests', page],
    () => getData(page),
    {
      staleTime: 600000, // 10 minutes
      cacheTime: 7200000, // 2 hour
    }
  );
  return {
    postsResponse: data,
    isLoading,
    refetch,
  };
}
