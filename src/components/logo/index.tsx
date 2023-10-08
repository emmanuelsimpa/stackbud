import logo from '@/assets/react.svg';
import { routes } from '@/config/routes';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="cursor-pointer">
      <Link to={routes.HOME}>
        <img alt="logo" src={logo} className="w-full h-full" />
      </Link>
    </div>
  );
}
