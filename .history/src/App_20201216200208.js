import React, { PureComponent } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from './style'
import {GlobalIconStyle} from './static/iconfont/iconfont'
import Header from './common/header'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <Header/>
      </Provider>
    )
  }
}
