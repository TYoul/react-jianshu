import React, { PureComponent } from 'react'
import {GlobalStyle} from './style'
import Header from './common/header'

export default class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle/>
        <Header/>
      </>
    )
  }
}