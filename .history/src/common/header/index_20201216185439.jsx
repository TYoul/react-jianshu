import React, { PureComponent } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from './style';

export default class Header extends PureComponent {
  constructor() {
    super();

    this.state = {
      focused: false,
    };
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={this.state.focused ? 'focused' : ''}
              onFocus={(e) => this.handleInputFocus()}
            ></NavSearch>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe614;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  handleInputFocus() {
    this.setState({
      focused: !this.state.focused,
    });
  }
}
