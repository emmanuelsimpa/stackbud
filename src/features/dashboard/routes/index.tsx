import { lazyImport } from '@/utils/lazy-imports';
import { Outlet, RouteObject } from 'react-router-dom';
import { Layout } from '../components/layout';

const { Main } = lazyImport(
  () => import('../components/dashboard/Main'),
  'Main'
);

const DashboardRoutList: RouteObject[] = [
  {
    index: true,
    element: <Main />,
  },
];

const DashboardLayout = (
  <Layout>
    <Outlet />
  </Layout>
);

export const DashboardRoutes: RouteObject = {
  path: '',
  element: DashboardLayout,
  children: DashboardRoutList,
};
