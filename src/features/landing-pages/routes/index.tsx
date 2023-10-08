import { Outlet, RouteObject } from 'react-router-dom';
import { lazyImport } from '@/utils/lazy-imports';
import { Layout } from '../components/layout';

const { Posts } = lazyImport(() => import('../components/posts'), 'Posts');
const { Post } = lazyImport(() => import('../components/singlePost'), 'Post');

const RouteList: RouteObject[] = [
  {
    index: true,
    element: <Posts />,
  },
  {
    path: ':id',
    element: <Post />,
  },
];

const RouteOutlet = (
  <Layout>
    <Outlet />
  </Layout>
);

export const LandingPageRoutes: RouteObject = {
  path: '',
  element: RouteOutlet,
  children: RouteList,
};
