import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "antd-mobile";
import { connect } from "react-redux";

import {showType} from '../../reducer/order.redux'

import SendInfo from "./sendInfo";
import ReceiveInfo from "./receiveInfo";
import AppreciationType from "../deliveryInfoCmpt/appreciationType";
import PayType from "../deliveryInfoCmpt/payType";
import GoodsType from "../deliveryInfoCmpt/goodsType";

import "../../style/deliverInfo.css";

import logo from "../../images/img-logo.png";
import icon_s from "../../images/icon-s.png";
import icon_j from "../../images/icon-j.png";

const AgreeItem = Checkbox.AgreeItem;

@connect(state => state.orderInfo,{showType})
class deliveryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
    };
  }
  checkData() {
    console.log(this.props);
    // this.props.history.push("/order/dlj");
  }
  componentWillMount() {
    // console.log(this.props.orderInfo);
  }
  render() {
    // 寄件人信息
    // 收件人信息
    // 寄付方式 1 物品类型 3 支付方式 2
    let sendData = this.props.sendData || false;      
    let receiveData = this.props.receiveData || false;
    let type = this.props.type || 0
    let cmp;
    switch (type) {
      case "1":
        cmp = <AppreciationType />;
        break;
      case "2":
        cmp = <PayType />;
        break;
      case "3":
        cmp = <GoodsType />;
        break;
      default:
        cmp = null;
        break;
    }
    console.log(cmp)

    return (
      <div className="deliverInfo_box">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="form_warrper">
          <div className="send_items">
            <div className="send_item">
              <img src={icon_j} alt="" className="send_item_l" />
              <Link to="/writePage/a">
                <SendInfo sendData={sendData} />
              </Link>
              <span className="icon-right" />
            </div>
            <div className="send_item">
              <img src={icon_s} alt="" className="send_item_l" />
              <Link to="/writePage/b">
                <ReceiveInfo receiveData={receiveData} />
              </Link>
              <span className="icon-right" />
            </div>
          </div>
          <div className="send_items">
            <div className="send_type">
              <span className="send_type_title">寄付方式</span>
              <span className="send_type_des" onClick={()=>{
                this.props.showType('1')
              }}>请选择寄付方式</span>
            </div>
          </div>
          <div className="send_items">
            <div className="send_type">
              <span className="send_type_title">物品类型</span>
              <span className="send_type_des type_active">文件*2</span>
            </div>
          </div>
          <div className="send_items">
            <div className="send_type">
              <span className="send_type_title">增值服务</span>
              <span className="send_type_des type_active">保值</span>
            </div>
          </div>
          <div className="send_agreement">
            <AgreeItem
              data-seed="logId"
              onChange={() => {
                this.setState({
                  checkBox: !this.state.checkBox
                });
              }}
            >
              我同意
              <a href="">《xxxx》</a>
            </AgreeItem>
          </div>
          <div className="send_submit">
            <button
              className="btn"
              onClick={() => {
                this.checkData();
              }}
            >
              下一步
            </button>
          </div>
        </div>
        <div>{cmp}</div>
      </div>
    );
  }
}

export default deliveryInfo;
