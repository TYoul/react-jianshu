import {INPUT_FOCUS,INPUT_BLUR} from './actionTypes'

export const inputFocusAction = (value) => ({
  type: INPUT_FOCUS,
  value
})

export const inputBlurAction = (value) => ({
  type: INPUT_BLUR,
  value
})