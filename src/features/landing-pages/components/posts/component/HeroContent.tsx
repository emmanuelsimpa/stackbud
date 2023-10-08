import { Link } from 'react-router-dom';

import Author from '@/components/author';
import Loading from '@/components/loading/Loading';
import { useAppSelector } from '@/hooks';
import { findItemWithHighestNumber } from '@/utils/findHighestNumber';

export function HeroContent() {
  const state = useAppSelector((state) => state.posts);
  const { entities } = state;

  const data = findItemWithHighestNumber(entities);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center py-8 gap-8">
        <div className="flex-1 space-y-5 w-full">
          <button className="text-white font-semibold text-xl capitalize rounded-full bg-purple-500 py-2 px-4 md:px-8">
            {data.category}
          </button>
          <h2 className="text-stone-950 font-medium text-3xl md:text-4xl">
            {data.title}
          </h2>
          <p className="text-stone-500 font-medium text-base">{data.text}</p>
          <div className="space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            <Author
              readTime={'5 mins'}
              name={`${data.owner.firstName} ${data.owner.lastName}`}
              postedOn={data.publishDate}
              imagePath={data.image}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full h-full">
          <div className="h-full lg:h-80 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <img
              className="object-contain w-full h-full"
              alt="Hero Image"
              src={data.image}
            />
          </div>
        </div>
      </div>
      <Link to={`/${data.id}`}>
        <div className="flex items-center justify-end gap-2 cursor-pointer">
          <p className="text-purple-500 font-semibold text-xl hover:underline ">
            Read more
          </p>
          <p className="text-purple-500 font-semibold text-3xl">&#8674;</p>
        </div>
      </Link>
    </div>
  );
}
