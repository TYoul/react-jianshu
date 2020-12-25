import axios from 'axios';
import * as actionTypes from './costants';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true,
});

export const loginOutAction = () => ({
  type: actionTypes.LOGIN_OUT,
  value: false,
});

export const login = (account, password) => {
  return dispatch => {
    axios
      .get('/api/login.json?acount=' + account + '&password' + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert('登录失败');
        }
      });
  };
};
