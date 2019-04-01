import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  //submitting: loading.effects['login/login']
  submitting: login.submitting
}))
class LoginPage extends Component {
  state = {
    autoLogin: true,
  };

  handleSubmit = (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
      values.autoLogin = this.state.autoLogin
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          {login.status === 'error' && login.msg && !submitting && this.renderMessage(login.msg)}
          <UserName
            name="account"
            placeholder="登录账号"
            rules={[
              {
                required: true,
                message: '请输入登录账号！',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="登录密码"
            onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            rules={[
              {
                required: true,
                message: '请输入登录密码！',
              },
            ]}
          />
          <div hidden>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              保持登录
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              忘记密码
            </a>
          </div>
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
