import { Navigate, RouteObject } from 'react-router-dom';
import Login from '../pages/Login';
import Event from '../pages/Event';

export const enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: RouteObject[] = [
  {
    path: RouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.LOGIN} />,
  },
];
export const privateRoutes: RouteObject[] = [
  {
    path: RouteNames.EVENT,
    element: <Event />,
  },
  {
    path: '*',
    element: <Navigate to={RouteNames.EVENT} />,
  },
];
