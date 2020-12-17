import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav } from './style';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem>首页</NavItem>
          <NavItem>下载App</NavItem>
          <NavItem>登录</NavItem>
          <NavItem></NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}
