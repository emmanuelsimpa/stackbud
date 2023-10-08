import google from '@/assets/svgs/auth/google.svg';

export default function Google({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="flex gap-2 items-center">
        <div className="w-full h-0 border-dashed border border-black-300" />
        <p className="w-2/3 text-center text-black-300">{label}</p>
        <div className="w-full h-0 border-dashed border border-black-300" />
      </div>
      <button className="w-full flex gap-2 btn rounded-full bg-purple-500 font-manrope font-medium text-16 tracking-widest text-black-100 ">
        <div>
          <img src={google} alt="google" width="32" height="34" />
        </div>
        {title}
      </button>
    </div>
  );
}
