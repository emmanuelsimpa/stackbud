import Loading from '@/components/loading/Loading';
import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseApp = ({ children }: { children?: ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      {children ? children : <Outlet />}
    </Suspense>
  );
};
