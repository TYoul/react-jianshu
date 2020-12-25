import axios from 'axios';
import * as actionTypes from './contants';

const changeDetailData = ({ title, content }) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title: title,
  content: content,
});

export const getDetailDataAction = () => {
  return dispatch => {
    axios
      .get('/api/detail.json')
      .then(res => {
        const result = res.data.data;
        dispatch(changeDetailData(result));
      })
      .catch(() => {});
  };
};
