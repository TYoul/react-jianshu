import {INPUT_FOCUS,INPUT_BLUR,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE,CHANGE_LIST} from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
  focused: false, // 搜索框聚焦
  mouseIn: false,
  list:[], // 搜索框热门搜索数据
  page:1,
  totalPage: 1,
})

function reducer(state=defaultStore, action){
  switch (action.type) {
    case INPUT_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focused',true)
    case INPUT_BLUR:
      return state.set('focused',false)
    case MOUSE_ENTER:
      return state.set('mouseIn',true)
    case MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case CHANGE_PAGE:
      return state.set('page',action.page)
    case CHANGE_LIST:
      return state.merge({
        list: action.value,
        totalPage: action.totalPage
      })
    default:
      return state
  }
}

export default reducer;