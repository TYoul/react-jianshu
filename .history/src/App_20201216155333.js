import React, { PureComponent } from 'react'
import {GlobalStyle} from './style'

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