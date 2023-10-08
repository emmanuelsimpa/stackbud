import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { routes } from '@/config/routes';
import { BaseApp } from './BaseApp';
import { useAppSelector } from '@/hooks';
import Loading from '@/components/loading/Loading';

export function ProtectedRoutes() {
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.auth);
  const { user } = state;
  useEffect(() => {
    if (!user) {
      return navigate(routes.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <BaseApp>
        <Outlet />
      </BaseApp>
    </Suspense>
  );
}
