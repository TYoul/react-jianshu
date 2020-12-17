import React, { PureComponent } from 'react';
import { HeaderWrapper, Logo } from './style';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    );
  }
}
