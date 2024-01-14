import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { Link } from 'react-router-dom';

import { RouteNames } from '@/routes';
import { store } from '@/store';
import { AuthActionCreators } from '@/store/reducers/auth/action-creator';

export const publicMenuItems: ItemType<MenuItemType>[] = [
  {
    key: 1,
    label: <Link to={RouteNames.LOGIN}>Login</Link>,
  },
];

export const privateMenuItems: ItemType<MenuItemType>[] = [
  {
    key: 2,
    label: 'Logout',
    onClick() {
      store.dispatch(AuthActionCreators.logout());
    },
  },
];
