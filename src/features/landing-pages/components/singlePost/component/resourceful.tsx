import { useEffect, useState } from 'react';

import PostCard from '@/components/cards/PostCard';
import Banner from '@/components/banner/Banner';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Loading from '@/components/loading/Loading';
import { transformResponse } from '@/utils/transformData';
import { useGetPost } from '../../posts/_redux/mutation/Mutate';
import { actions } from '../../posts/_redux';

import face1 from '@/assets/svgs/face1.svg';
import face2 from '@/assets/svgs/face2.svg';
import face3 from '@/assets/svgs/face3.svg';
import face4 from '@/assets/svgs/face4.svg';
import face5 from '@/assets/svgs/face5.svg';

const icon_data = [
  { icon: face1 },
  { icon: face2 },
  { icon: face3 },
  { icon: face4 },
  { icon: face5 },
];

export function Resourceful() {
  const state = useAppSelector((state) => state.posts);
  const { entities } = state;
  const dispatch = useAppDispatch();
  const { postsResponse, isLoading } = useGetPost();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 10000);
  }, [message]);

  useEffect(() => {
    if (postsResponse) {
      const data = transformResponse(postsResponse.data.data);
      dispatch(actions.fetchAllData(data));
    }
  }, [postsResponse, dispatch]);

  if (isLoading && !entities) {
    return <Loading />;
  }

  return (
    <div>
      <div className="w-full flex justify-center pb-16">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center pb-2.5">
            <p className="text-purple-500 text-base font-bold">
              Was this resource helpful to you?
            </p>
          </div>
          <div className="flex flex-row gap-5">
            {icon_data.map((item, index) => (
              <div key={index} className="cursor-pointer">
                <img
                  src={item.icon}
                  alt="icon"
                  width={37}
                  height={37}
                  className="yellow-300"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-2.5">
            <p className="p-semibold text-primary-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p className="h1-bold text-primary-500 pb-5">Read more like this</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16 gap-y-20">
          {entities &&
            entities?.slice(0, 9)?.map((item: any, index: any) => {
              return (
                <div key={index} className="">
                  <PostCard
                    author={`${item.owner.firstName} ${item.owner.lastName}`}
                    image={item.image}
                    category={item.category}
                    title={item.title}
                    content={item.text}
                    id={item.id}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <section className="mt-28">
        <Banner />
      </section>
    </div>
  );
}
