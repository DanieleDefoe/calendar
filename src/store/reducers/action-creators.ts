import { AuthActionCreators } from './auth/action-creator';
import { EventActionCreators } from './event/action-creator';

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
