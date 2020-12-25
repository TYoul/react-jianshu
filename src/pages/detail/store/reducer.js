import { fromJS } from 'immutable';
import * as actionTypes from './contants';

const defaultState = fromJS({
  title: '',
  content: '',
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL_DATA:
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content),
      });
    default:
      return state;
  }
}
