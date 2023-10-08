import { lazyImport } from '@/utils/lazy-imports';
import { Outlet, RouteObject } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';

const { SignUp } = lazyImport(() => import('../components/SignUp'), 'SignUp');
const { Login } = lazyImport(() => import('../components/Login'), 'Login');

const RouteList: RouteObject[] = [
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login />,
  },
];

const PageOutlet = (
  <Layout>
    <Outlet />
  </Layout>
);

export const AuthPageRoutes: RouteObject = {
  path: '',
  element: PageOutlet,
  children: RouteList,
};
