import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return <div>写文章</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin']),
});

export default connect(mapStateToProps, null)(Login);
