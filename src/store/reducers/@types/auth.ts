import { User } from '@/models/User';

export interface AuthState {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}

export const enum AuthActionsEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: User;
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export type AuthAction = SetAuthAction | SetErrorAction | SetUserAction | SetIsLoadingAction;
