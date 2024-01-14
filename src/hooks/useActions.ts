import { bindActionCreators } from 'redux';
import { useTypedDispatch } from './useTypedDispatch';
import { allActionCreators } from '../store/reducers/action-creators';

export const useActions = () => {
  const dispatch = useTypedDispatch();

  return bindActionCreators(allActionCreators, dispatch);
};
