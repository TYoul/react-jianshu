import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    );
  }
}
