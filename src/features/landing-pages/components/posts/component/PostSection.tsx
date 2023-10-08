import { useEffect, useState } from 'react';
import { data } from '@/data/categories';
import { classNames } from '@/utils/className';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useGetPost } from '../_redux/mutation/Mutate';
import { transformResponse } from '@/utils/transformData';
import { actions } from '../_redux';
import { toast } from 'react-toastify';

export function PostSection() {
  const dispatch = useAppDispatch();
  const { postsResponse } = useGetPost();
  const state = useAppSelector((state) => state.posts);
  const [selected, setSelected] = useState(data[0]);

  const { entities } = state;

  useEffect(() => {
    if (postsResponse) {
      const data = transformResponse(postsResponse.data.data);
      if (selected !== 'all') {
        const updatedEntities = entities.filter(
          (entity: { category: string }) => entity.category === selected
        );
        if (updatedEntities.length <= 0) {
          toast(`No available data for ${selected}`);
          setSelected('all');
          dispatch(actions.fetchAllData(data));
        } else {
          dispatch(actions.fetchAllData(updatedEntities));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, dispatch]);

  return (
    <div className="overflow-x-auto scrollbar">
      <div className="flex gap-4 whitespace-nowrap min-w-full">
        {data.map((item) => {
          return (
            <div
              key={item}
              onClick={() => setSelected(item)}
              className={classNames(
                selected === item
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-stone-950',
                'w-fit cursor-pointer font-medium px-2 md:px-4 text-sm md:text-xl'
              )}
            >
              <p className="capitalize tracking-wide">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
