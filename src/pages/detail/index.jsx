import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import detailImage from '../../assets/img/detail-1.png';
import { DetailWrapper, Header, Content } from './style';

import { getDetailDataAction } from './store/actionCreator';

class Detail extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content>
          <img src={detailImage} alt="" />
          <p>
            <b>2017年，衡水中学考上清华北大的人数是176人</b>
            ，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。
          </p>
          <p>
            2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。
          </p>
          <p>
            2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。
          </p>
          <p>
            2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。
          </p>
        </Content>
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail();
  }
}

const mapStateToProps = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = dispatch => ({
  getDetail() {
    dispatch(getDetailDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
