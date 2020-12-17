import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}
