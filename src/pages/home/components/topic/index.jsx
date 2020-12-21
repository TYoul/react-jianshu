import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from './style';

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    const newTopicList = topicList.toJS();
    return (
      <TopicWrapper>
        {newTopicList.map((item, index) => (
          <TopicItem key={item.id}>
            <img className="topic-pic" src={item.imgUrl} alt="" />
            {item.title}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList']),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
