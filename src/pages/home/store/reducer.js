import * as actionTypes from './constants'
import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList:[],
  recommendList:[],
  articlePage: 1,
  showScroll: false
})

function reducer(state = defaultState, action){
  switch (action.type) {
  case actionTypes.CHANGE_HOME_DATA:
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    });
  case actionTypes.GET_MORE_LIST:
    return state.merge({
      articleList: state.get('articleList').concat(action.moreList),
      articlePage: action.nextPage
    });
  case actionTypes.TOGGLE_TOP_SHOW:
    return state.set('showScroll',action.isShow);
  default:
    return state;
  }
}

export default reducer;