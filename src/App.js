import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';
import { GlobalIconStyle } from './static/iconfont/iconfont';
import Header from './common/header';
import Login from './pages/login';
import Write from './pages/write';

import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIconStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/Write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
