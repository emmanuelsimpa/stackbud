export default function Loading() {
  const text = ['S', 'T', 'a', 'c', 'k', 'B', 'u', 'l', 'd'];
  return (
    <div className="h-screen flex justify-center items-center">
      {text.map((item, index) => (
        <div
          key={index}
          className="bg-purple-500 w-14 h-10 rounded-full flex items-center justify-center dot"
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <h1 className="text-center text-white text-3xl font-bold ">{item}</h1>
        </div>
      ))}
    </div>
  );
}
