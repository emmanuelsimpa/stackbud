import { RouteObject } from 'react-router-dom';

import { BaseApp } from './BaseApp';
import { AuthPageRoutes } from '@/features/auth/routes';
import { LandingPageRoutes } from '@/features/landing-pages';
import { ProtectedRoutes } from './ProtectedRoutes';
import { DashboardRoutes } from '@/features/dashboard/routes';

export const routesList: RouteObject[] = [
  {
    path: '',
    element: <BaseApp />,
    children: [LandingPageRoutes, AuthPageRoutes],
  },
  {
    path: 'dashboard',
    element: <ProtectedRoutes />,
    children: [DashboardRoutes],
  },
];
