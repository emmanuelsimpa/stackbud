import { Button } from '@/components/button/Button';
import Logo from '@/components/logo';
import { routes } from '@/config/routes';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="fixed top-0 inset-x-0 shadow z-10">
      <nav className="shadow-md shadow-opacity-30 bg-purple-50">
        <div className="wrapper flex justify-between items-center py-4">
          <Logo />
          <div className="flex gap-5">
            <Link to={routes.HOME}>
              <Button name="Blog" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
