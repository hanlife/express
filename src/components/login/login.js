import React, {Component} from "react";
import {
  InputItem,
  Toast,
  Button,
} from "antd-mobile";
import {connect} from "react-redux";

import '../../style/login.css'
import Login_logo from "../../images/img_login_logo.png"

import {CheckSalesman} from '../../axios/api'
import {login} from "../../reducer/user.redux";

@connect(state => state.user, {login})
class Login extends Component {
  state = {
    phone: "",
    hasError: false
  };
  componentDidMount() {
    console.log(this.props);
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入11位手机号');
    }
  }
  onChange = (key, value) => {
    let phone = value.replace(/\s+/g, "")
    let ismobile = /^1[3|4|5|6|7|8|9]\d{9}$/;
    if (!ismobile.test(phone)) {
      this.setState({hasError: true});
    } else {
      this.setState({hasError: false});
    }
    this.setState({[key]: value});
  };
  // 提交
  submit() {
    let {phone} = this.state;
    phone = phone.replace(/\s+/g, "")
    if (this.state.hasError) {
      Toast.info("请输入正确的手机号");
      return
    }
    CheckSalesman({phone: phone}).then(res => {
      localStorage.setItem("phone", phone)
      if (res.messageModel.code === 0) {
        this
          .props
          .login({phone});
        this
          .props
          .history
          .push("/build/home");
      } else {
        this
          .props
          .history
          .push("/build/Idcard");
      }
    })
  }
  render() {
    return (
      <div className="login_box">
        <img src={Login_logo} alt="logo" className="login_logo"/>
        <div className="login_from">
          <InputItem
            type="phone"
            placeholder="请输入手机号"
            onChange={v => {
            this.onChange("phone", v);
          }}
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}>
            <div className="icon_phone"></div>
          </InputItem>
          <div style={{height:"50px"}}></div>
          <Button
            type="primary"
            disabled={this.state.hasError}
            onClick={() => {
            this.submit();
          }}>
            确认
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
