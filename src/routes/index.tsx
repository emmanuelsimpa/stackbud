import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routesList } from './RouteList';
import Loading from '@/components/loading/Loading';

const router = createBrowserRouter([...routesList]);

export const AppRouter = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};
