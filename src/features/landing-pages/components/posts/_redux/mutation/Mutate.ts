import { useQuery } from '@tanstack/react-query';
import { getData } from '../Crud';

export function useGetPost() {
  const { data, isLoading } = useQuery(['requests'], getData, {
    staleTime: 600000, // 10 minutes
    cacheTime: 7200000, // 2 hour
  });
  return {
    postsResponse: data,
    isLoading,
  };
}
