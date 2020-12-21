import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getHomeData, toggleTopShow } from './store/actionCreator';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

class Home extends PureComponent {
  render() {
    const { showScroll } = this.props;
    return (
      <>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {showScroll ? (
            <BackTop onClick={(e) => this.handleScrollTop()}>顶部</BackTop>
          ) : (
            ''
          )}
        </HomeWrapper>
      </>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTop);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTop);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = getHomeData();
    dispatch(action);
  },
  changeScrollTop() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(toggleTopShow(true));
    } else {
      dispatch(toggleTopShow(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
