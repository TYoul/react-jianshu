import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={input => (this.account = input)} />
            <Input
              placeholder="密码"
              type="password"
              ref={input => (this.password = input)}
            />
            <Button
              onClick={e => this.props.login(this.account, this.password)}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin']),
});

const mapDispatchToProps = dispatch => ({
  login(account, password) {
    dispatch(actionCreators.login(account.value, password.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
