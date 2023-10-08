import { useQuery } from '@tanstack/react-query';
import { getData } from '../Crud';

export function useGetSinglePost(id: string) {
  const { data, isLoading, isError } = useQuery(
    ['requests', id],
    () => getData(id),
    {
      staleTime: 600000, // 10 minutes
      cacheTime: 7200000, // 2 hour
    }
  );
  return {
    postResponse: data,
    isLoading,
    isError,
  };
}
