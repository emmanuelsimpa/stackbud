import { formatDate } from '@/utils/format-date';

export default function Author({
  imagePath,
  name,
  postedOn,
  readTime,
}: {
  imagePath?: string;
  name: string;
  postedOn?: string;
  readTime?: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden bg-red-300 rounded-full flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={imagePath}
          alt="profile"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-1">
        <p className="text-stone-500 font-semibold text-base md:text-lg">
          {name}
        </p>
        {postedOn && readTime && (
          <p className="text-stone-500 text-xs md:text-sm">
            {formatDate(postedOn)} <span>. {readTime}</span>
          </p>
        )}
      </div>
    </div>
  );
}
