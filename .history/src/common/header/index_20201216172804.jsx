import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo, Nav } from './style';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}