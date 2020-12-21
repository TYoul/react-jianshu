import React, { PureComponent } from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from './style'
import {GlobalIconStyle} from './static/iconfont/iconfont'
import Header from './common/header'

import Home from './pages/home'
import Detail from './pages/detail'
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
