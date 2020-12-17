import {INPUT_FOCUS,INPUT_BLUR,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE,CHANGE_LIST} from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const changeListAction = (value) => ({
  type: CHANGE_LIST,
  value: fromJS(value),
  totalPage: Math.ceil(value.length / 10)
})

export const inputFocusAction = () => ({
  type: INPUT_FOCUS
})

export const inputBlurAction = () => ({
  type: INPUT_BLUR
})

export const mouseEnterAction = () => ({
  type: MOUSE_ENTER
})

export const mouseLeaveAction = () => ({
  type: MOUSE_LEAVE
})

export const changePageAction = page => ({
  type: CHANGE_PAGE,
  page: fromJS(page)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res=>{
      const data = res.data;
      const action = changeListAction(data.data);
      dispatch(action);
    }).catch(err=>{
      console.log(err);
    })
  }
}

