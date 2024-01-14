import { message } from 'antd';
import { type AppDispatch } from '../..';
import { type User } from '../../../models/User';
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  type SetUserAction,
} from '../@types/auth';
import { findUser } from '../../../utils/helpers/findUser';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
  setUser(user: User): SetUserAction {
    return {
      type: AuthActionsEnum.SET_USER,
      payload: user,
    };
  },
  setError(error: string): SetErrorAction {
    return {
      type: AuthActionsEnum.SET_ERROR,
      payload: error,
    };
  },
  setIsAuth(auth: boolean): SetAuthAction {
    return {
      type: AuthActionsEnum.SET_AUTH,
      payload: auth,
    };
  },
  setIsLoading(loading: boolean): SetIsLoadingAction {
    return {
      type: AuthActionsEnum.SET_IS_LOADING,
      payload: loading,
    };
  },
  login(u: string, p: string) {
    return function (dispatch: AppDispatch) {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const { data: mockUsers } = await UserService.getUsers();
          const mockUser = mockUsers.find((user) => findUser(user, u, p));
          if (mockUser) {
            localStorage.setItem('auth', JSON.stringify(true));
            localStorage.setItem('username', JSON.stringify(mockUser.username));
            dispatch(AuthActionCreators.setUser(mockUser));
            dispatch(AuthActionCreators.setIsAuth(true));
            message.success('Sussess sigin!');
          } else {
            const msg = 'Incorrect username or password';
            dispatch(AuthActionCreators.setError(msg));
            message.error(msg);
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000);
      } catch (error) {
        dispatch(
          AuthActionCreators.setError('An error occured while Logging in')
        );
        message.error('An error occured while Logging in');
      }
    };
  },
  logout() {
    return async function (dispatch: AppDispatch) {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      dispatch(AuthActionCreators.setUser({} as User));
      dispatch(AuthActionCreators.setIsAuth(false));
      message.success('Logout success');
    };
  },
};
