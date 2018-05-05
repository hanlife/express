import React, { Component } from "react";
import { List, InputItem, Toast, Button } from "antd-mobile";

import { connect } from "react-redux";
import { login } from "../../reducer/user.redux";



@connect(state => state.user, { login })
class Login extends Component {
  state = {
    phone: "",
    pwd: ""
  };
  componentDidMount() {
    console.log(this.props);
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
    console.log(this.state);
  };
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("请输入正确的手机号");
    }
  };
  // 提交
  submit() {
    let { phone, pwd } = this.state;
    this.props.login({ phone, pwd });
  }
  render() {
    return (
      <div className="">
        {this.props.msg ? <p>{this.props.msg}</p> : null}
        <List renderHeader={() => "登陆"}>
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            onChange={v => {
              this.onChange("phone", v);
            }}
          >
            手机号码
          </InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={v => {
              this.onChange("pwd", v);
            }}
          >
            密码
          </InputItem>
          <Button
            type="primary"
            onClick={() => {
              this.submit();
            }}
          >
            确认
          </Button>
        </List>
      </div>
    );
  }
}

export default Login;
