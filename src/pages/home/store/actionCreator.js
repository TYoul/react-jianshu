import * as actionTypes from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const toggleTopShow = (isShow) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  isShow
})

const changeHomeDataAction = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
})

const getMoreListAction = (result,articlePage) => ({
  type: actionTypes.GET_MORE_LIST,
  moreList: fromJS(result),
  nextPage:articlePage
})

export const getHomeData = () => {
  return (dispatch) =>{
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeDataAction(result);
      dispatch(action);
    });
  }
}

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?/page=' + articlePage).then((res)=>{
      const result = res.data.data
      const action = getMoreListAction(result,articlePage + 1);
      dispatch(action);
    })
  }
}