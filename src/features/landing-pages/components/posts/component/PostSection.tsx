import { useEffect, useState } from 'react';
import { data } from '@/data/categories';
import { classNames } from '@/utils/className';
import { useAppDispatch } from '@/hooks';
import { actions } from '../_redux';
import { transformResponse } from '@/utils/transformData';
import { useGetPost } from '../_redux/mutation/Mutate';

export function PostSection() {
  const dispatch = useAppDispatch();
  const { postsResponse } = useGetPost();
  const [selected, setSelected] = useState(data[0]);
  const [update, setUpdate] = useState<any>();

  useEffect(() => {
    if (selected !== 'all') {
      const updatedEntities = update.filter(
        (entity: { category: string }) => entity.category === selected
      );
      dispatch(actions.fetchAllData(updatedEntities));
    } else {
      dispatch(actions.fetchAllData(update));
    }
  }, [dispatch, selected, update]);

  useEffect(() => {
    if (postsResponse) {
      const data = transformResponse(postsResponse.data.data);
      setUpdate(data);
    }
  }, [postsResponse, selected]);

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
