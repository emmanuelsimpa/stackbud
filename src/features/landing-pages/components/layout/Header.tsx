import { Button } from '@/components/button/Button';
import Logo from '@/components/logo';
import { routes } from '@/config/routes';
import { useAppSelector } from '@/hooks';
import { Link } from 'react-router-dom';

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
              <div>
                <Button name={`${user.firstName}`} />
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
