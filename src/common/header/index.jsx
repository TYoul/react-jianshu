import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  inputFocusAction,
  inputBlurAction,
  mouseEnterAction,
  mouseLeaveAction,
  changePageAction,
  getList,
} from './store/actionCreators';
import { loginOutAction } from '../../pages/login/store/actionCreators';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends PureComponent {
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      isLogin,
      loginOut,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {isLogin ? (
            <NavItem className="right" onClick={e => loginOut()}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={e => handleInputFocus(list)}
                onBlur={e => handleInputBlur()}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    let pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={e => handleMouseEnter()}
          onMouseLeave={e => handleMouseLeave()}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={e => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    isLogin: state.getIn(['login', 'isLogin']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      // ajax请求优化，避免多次ajax请求。
      list.size === 0 && dispatch(getList());
      dispatch(inputFocusAction());
    },
    handleInputBlur() {
      dispatch(inputBlurAction());
    },
    handleMouseEnter() {
      dispatch(mouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(mouseLeaveAction());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      page < totalPage ? (page = page + 1) : (page = 1);
      dispatch(changePageAction(page));
    },
    loginOut() {
      dispatch(loginOutAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
