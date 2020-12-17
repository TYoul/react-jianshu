import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  inputFocusAction,
  inputBlurAction,
  mouseEnterAction,
  mouseLeaveAction,
  changePageAction,
  getList,
} from './store/actionCreators';
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
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={(e) => handleInputFocus()}
                onBlur={(e) => handleInputBlur()}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe614;
            </i>
            {this.getListArea()}
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

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    let pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={(e) => handleMouseEnter()}
          onMouseLeave={(e) => handleMouseLeave()}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={(e) => handleChangePage(page)}>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(getList());
      const action = inputFocusAction();
      dispatch(action);
    },
    handleInputBlur() {
      const action = inputBlurAction();
      dispatch(action);
    },
    handleMouseEnter() {
      const action = mouseEnterAction();
      dispatch(action);
    },
    handleMouseLeave() {
      const action = mouseLeaveAction();
      dispatch(action);
    },
    handleChangePage(page) {
      const action = changePageAction(page);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
