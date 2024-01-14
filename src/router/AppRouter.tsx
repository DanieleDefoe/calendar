import { Route, type RouteObject, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  const mapRoutes = (route: RouteObject) => (
    <Route path={route.path} element={route.element} key={route.path} />
  );

  return (
    <Routes>
      {isAuth ? privateRoutes.map(mapRoutes) : publicRoutes.map(mapRoutes)}
    </Routes>
  );
};

export default AppRouter;
