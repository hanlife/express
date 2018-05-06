import React, { Component } from "react";
import { connect } from "react-redux";
import { Toast } from 'antd-mobile';

import { getReceiveData } from "../../reducer/order.redux";

import Img_card from "../../images/icon-card.png";
import "../../style/writePage.css";

@connect(state => state, { getReceiveData })
class WritePage extends Component {
  componentWillMount() {
    this.setState({
        infoType:this.props.match.params.type
    })
  }
  handChage(k, v) {
    this.setState({
      [k]: v
    });
  }
  submit() {
    let { name, phone, shq, address } = this.state;
    if (!name || !phone || !shq || !address) {
      Toast.info("请填写完整！", 2, null, false);
      return
    }
    this.props.getReceiveData(this.state);
    this.props.history.push("/deliveryInfo");
  }
  render() {
    return (
      <div className="writePage_box">
        <div className="address_warpper">
          <div className="address_left">
            <div>
              <img src={Img_card} alt="card" className="icon_card" />>
              <p>传名片</p>
            </div>
          </div>
          <div className="address_right">
            <div>
              <textarea
                type="text"
                name=""
                id=""
                cols="40"
                rows="3"
                placeholder="请粘贴诸如“深圳市宝安区科技园北区 赵日天 23333333333”"
                className="input_address"
              />
            </div>
          </div>
        </div>
        <p className="address_tip">
          <span className="icon_tip" />地址识别说明和示例
        </p>
        <div className="address_from">
          <div className="address_item">
            <span className="address_title">姓名:</span>
            <input
              type="text"
              placeholder="请输入寄件人姓名"
              onChange={e => {
                this.handChage("name", e.target.value);
              }}
              className="address_name"
            />>
            <span className="form_icon icon_jname" />
          </div>
          <div className="address_item">
            <span className="address_title">手机:</span>
            <input
              type="text"
              placeholder="请输入手机号码"
              onChange={e => {
                this.handChage("phone", e.target.value);
              }}
              className="address_name"
            />>
          </div>
          <div className="address_item">
            <span className="address_title">省市区:</span>
            <input
              type="text"
              placeholder="请选择省市区"
              onChange={e => {
                this.handChage("shq", e.target.value);
              }}
              className="address_name"
            />>
            <span className="form_icon icon_address" />
          </div>
          <div className="address_item">
            <span className="address_title">详细地址:</span>
            <input
              type="text"
              placeholder="请输入详细地址"
              onChange={e => {
                this.handChage("address", e.target.value);
              }}
              className="address_name"
            />>
          </div>
          <div className="btn_save">
            <button
              type="button"
              onClick={() => {
                this.submit();
              }}
            >
              保存
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default WritePage;
