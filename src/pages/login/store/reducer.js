import { fromJS } from 'immutable';
import * as actionTypes from './costants';

const defaultState = fromJS({
  isLogin: false,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('isLogin', action.value);
    case actionTypes.LOGIN_OUT:
      return state.set('isLogin', action.value);
    default:
      return state;
  }
}
