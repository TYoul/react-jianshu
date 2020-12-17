import {INPUT_FOCUS,INPUT_BLUR} from './actionTypes'

const defaultStore = {
  focused: false, // 搜索框聚焦
}

function reducer(state=defaultStore, action){
  switch (action.type) {
    case INPUT_FOCUS:
      return {...state,focused: true}
    case INPUT_BLUR:
      return {...state,focused: false}
    default:
      return state
  }
}

export default reducer;