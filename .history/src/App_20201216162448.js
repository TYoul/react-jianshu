import React, { PureComponent } from 'react'
import {GlobalStyle} from './style'
import Header from './common/header'

export default class App extends PureComponent {
  render() {
    return (
      <div className="dell">
        Hello world
        <GlobalStyle/>
      </div>
    )
  }
}
