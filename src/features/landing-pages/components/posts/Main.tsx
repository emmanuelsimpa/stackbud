import { useEffect, useState } from 'react';

import Banner from '@/components/banner/Banner';
import { HeroContent, PostList, PostSection } from './component';
import { useGetPost } from './_redux/mutation/Mutate';
import { useAppDispatch } from '@/hooks';
import { actions } from './_redux';
import Loading from '@/components/loading/Loading';
import { transformResponse } from '@/utils/transformData';
import Pagination from '@/components/pagination/Pagination';

export function Posts() {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { postsResponse, isLoading, refetch } = useGetPost(currentPage);
  const totalPages = 20;

  const handlePageChange = (page: any) => {
    if (page !== '...') {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (postsResponse) {
      const data = transformResponse(postsResponse.data.data);
      dispatch(actions.fetchAllData(data));
    }
  }, [dispatch, postsResponse]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen">
      <HeroContent />
      <div className="flex space-x-2 h-5 overflow-hidden my-8">
        <div className="flex justify-start gap-2 md:gap-4">
          {Array.from({ length: 120 }).map((_, index) => (
            <div
              key={index}
              className="border-dashed border-b-4 border-purple-100 w-5 rounded-xl h-1 min-w-32"
            />
          ))}
        </div>
      </div>
      <section className=" pt-0  md:pt-8 px-8 md:px-8 lg:px-16">
        <PostSection />
        <PostList />
        <div className="pt-16">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
      <div className="mt-24 px-4">
        <Banner />
      </div>{' '}
    </section>
  );
}
