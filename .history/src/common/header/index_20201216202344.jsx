import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
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

class Header extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const { focused } = this.props;
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
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={(e) => this.handleInputFocus()}
                onBlur={(e) => this.handleInputBlur()}
              ></NavSearch>
            </CSSTransition>
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
      focused: true,
    });
  }

  handleInputBlur() {
    this.setState({});
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
