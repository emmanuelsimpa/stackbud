export function Button({
  name,
  onClick,
  disabled,
}: {
  name: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-white font-semibold text-lg tracking-wide uppercase rounded-md bg-purple-500 hover:bg-purple-800 py-2 px-4 md:px-8"
    >
      {name}
    </button>
  );
}
