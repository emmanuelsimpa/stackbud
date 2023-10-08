export default function Input({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange?: any;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-bold text-stone-950">{label}</label>
      <input
        className="w-full h-12 md:p-2 bg-white pl-6 lg:pl-8 focus:outline-purple-500 items-center rounded-md shadow-2xl border border-purple-500 focus:border-none placeholder:font-lg placeholder:tracking-wider placeholder:text-stone-950 text-stone-950 text-lg font-medium"
        placeholder={`${placeholder}`}
        onChange={onChange}
      />
    </div>
  );
}
