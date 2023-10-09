import { PostCardProps } from '@/types/PostCard';

export default function PostCard({
  image,
  category,
  title,
  content,
  id,
}: PostCardProps) {
  const handleNavigate = (id: string) => {
    window.location.href = `/${id}`;
  };
  return (
    <div className="cursor-pointer " key={id}>
      <div className="flex flex-col gap-2 md:gap-5 items-start ">
        <div className="h-60 w-60 md:h-60 md:w-72 rounded-lg md:rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="keza-blog"
            className="object-cover w-full h-full"
            width={500}
            height={500}
            onClick={() => handleNavigate(id)}
          />
        </div>
        <button className="text-white font-semibold text-xl capitalize rounded-full bg-purple-500 py-1 px-4 md:px-8">
          {category}
        </button>
        <div className="max-h-[8.625rem] w-full ">
          <h2
            onClick={() => handleNavigate(id)}
            className="text-stone-950 font-medium text-xl w-fit h-fit hover:underline "
          >
            {title}
          </h2>
          <p className="text-stone-950 max-w-sm w-full font-normal text-base">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
