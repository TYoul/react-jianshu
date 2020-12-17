import React, { PureComponent } from 'react'
import {GlobalStyle} from './style'
import {GlobalIconStyle} from './static/iconfont/iconfont'
import Header from './common/header'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <Header/>
      </>
    )
  }
}
