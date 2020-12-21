import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from './style';

class Recommend extends PureComponent {
  render() {
    // debugger;
    const { recommendList } = this.props;
    const newRecommend = recommendList.toJS();
    return (
      <RecommendWrapper>
        {newRecommend.map((item, index) => (
          <RecommendItem key={item.id} imgUrl={item.imgUrl}></RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(['home', 'recommendList']),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
