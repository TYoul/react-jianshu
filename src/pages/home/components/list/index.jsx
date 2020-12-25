import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMoreList } from '../../store/actionCreator';
import { ListItem, ListInfo, LoadMore } from './style';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    const newArticleList = articleList.toJS();
    return (
      <>
        {newArticleList.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.id}>
              <ListItem>
                <img className="pic" src={item.imgUrl} alt="" />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={e => getMoreList(articlePage)}>加载更多</LoadMore>
      </>
    );
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage']),
});

const mapDispatchToProps = dispatch => ({
  getMoreList(articlePage) {
    const action = getMoreList(articlePage);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
