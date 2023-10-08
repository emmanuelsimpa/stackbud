import Banner from '@/components/banner/Banner';
import { HeroContent, PostList, PostSection } from './component';
import { useEffect } from 'react';
import { useGetPost } from './_redux/mutation/Mutate';
import { useAppDispatch } from '@/hooks';
import { actions } from './_redux';
import Loading from '@/components/loading/Loading';
import { transformResponse } from '@/utils/transformData';

export function Posts() {
  const dispatch = useAppDispatch();
  const { postsResponse, isLoading } = useGetPost();

  useEffect(() => {
    if (postsResponse) {
      const data = transformResponse(postsResponse.data.data);
      dispatch(actions.fetchAllData(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postsResponse]);

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
      </section>
      <div className="mt-24 px-4">
        <Banner />
      </div>{' '}
    </section>
  );
}
