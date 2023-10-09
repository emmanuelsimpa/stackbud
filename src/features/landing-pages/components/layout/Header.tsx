import { Button } from '@/components/button/Button';
import Logo from '@/components/logo';
import { routes } from '@/config/routes';
import { useAppSelector } from '@/hooks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Header() {
  const state = useAppSelector((state) => state.auth);
  const { user } = state;
  return (
    <div className="fixed top-0 inset-x-0 shadow z-10">
      <nav className="shadow-md shadow-opacity-30 bg-purple-50">
        <div className="wrapper flex justify-between items-center py-4">
          <Logo />
          <div className="flex flex-col md:flex-row gap-5">
            <Link to={routes.DASHBOARD}>
              <Button name="Create Blog" />
            </Link>
            {user ? (
              <div
                onClick={() => toast('No Profile Page, Feature is coming soon')}
              >
                <button className="w-full text-white font-semibold text-lg tracking-wide uppercase rounded-full bg-purple-500 hover:bg-purple-800 py-2 px-2">
                  {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}
                </button>
              </div>
            ) : (
              <Link to={routes.LOGIN}>
                <Button name="Login" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
