import PostCard from '@/components/cards/PostCard';
import { useAppSelector } from '@/hooks';

export function PostList() {
  const state = useAppSelector((state) => state.posts);
  const { entities } = state;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16 pt-8 md:pt-24 gap-y-20">
        {entities &&
          entities.map((item: any, index: any) => {
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
  );
}
