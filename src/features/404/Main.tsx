import { Button } from '@/components/button/Button';
import { routes } from '@/config/routes';
import { Link } from 'react-router-dom';

export function Main() {
  const text = ['S', 'T', 'a', 'c', 'k', 'B', 'u', 'l', 'd'];
  return (
    <div className="h-screen justify-center items-center">
      <div className="h-full flex flex-col justify-center items-center">
        <p className="text-center text-purple-300 text-5xl font-bold pb-20">
          You've lost your way in{' '}
        </p>
        <div className="flex">
          {text.map((item, index) => (
            <div
              key={index}
              className="bg-purple-500 w-14 h-10 rounded-full flex items-center justify-center dot"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h1 className="text-center text-white text-3xl font-bold ">
                {item}
              </h1>
            </div>
          ))}
        </div>
        <Link to={routes.HOME} className="w-fit pt-20">
          <Button name="Go Back Home" />
        </Link>
      </div>
    </div>
  );
}
