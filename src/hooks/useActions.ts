import { bindActionCreators } from 'redux';

import { allActionCreators } from '../store/reducers/action-creators';
import { useTypedDispatch } from './useTypedDispatch';

export const useActions = () => {
  const dispatch = useTypedDispatch();

  return bindActionCreators(allActionCreators, dispatch);
};
