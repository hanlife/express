import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Checkbox, Toast} from "antd-mobile";
import {connect} from "react-redux";
import {uploaduserExpressInformation} from '../../axios/api'

import {showType} from '../../reducer/order.redux'

import SendInfo from "./sendInfo";
import ReceiveInfo from "./receiveInfo";
import Insurance from './insurance'
import FormatPayType from './paytype'
import GoodsInfos from './goodsInfos'
import AppreciationType from "../deliveryInfoCmpt/appreciationType";
import PayType from "../deliveryInfoCmpt/payType";
import GoodsType from "../deliveryInfoCmpt/goodsType";

import "../../style/deliverInfo.css";

import logo from "../../images/img-logo.png";
import icon_s from "../../images/icon-s.png";
import icon_j from "../../images/icon-j.png";

const AgreeItem = Checkbox.AgreeItem;

@connect(state => state, {showType})
class deliveryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: false
    };
  }
  checkData() {
    console.log(this.props);
    let _t = this
    let {goodsInfos, insuranceFlag, paytype, receiveData, sendData} = this.props.orderInfo;
    let phone = localStorage.getItem("phone")
      let clientName = "财悠悠",
        productType = 1,
        firstOrderFlag = 0,
        emergencyFlag = 0,
        totalPackages = 1
      // phone:客户手机号，clientName:专家名称，totalPackage:包裹总件数，goodsInfos:货物信息
      // productType:产品类型，receiverAddr:收件人信息，senderAddr:发件人信息，insuranceFlag：是否报价
      // payType:支付方式 emergencyFlag:是否加急 firstOrderFlag：是否是首单
      let error = ''
      if(!phone){
         Toast.info("请重新登录",2,function() {
            _t.props.history.push("/build");
          },true)
          return
      }
      if(!this.state.checkBox){
        Toast.info("请阅读并同意《快件运单契约条款》")
          return
      }
      if (JSON.stringify(sendData)==="{}") {
        error += "寄件人信息、"
      }
      if (JSON.stringify(receiveData)==="{}") {
        error += "收件人信息、"
      }
      if (!paytype) {
        error += "寄付方式"
      }
      if (!goodsInfos.goodsName) {
        error += "物品类型、"
      }
      if (!insuranceFlag) {
        error += "增值服务、"
      }
      if (error !== '') {
        Toast.info('请填写' + error)
        return
      }
      this.Request({
        phone,
        clientName,
        totalPackages,
        goodsInfos:JSON.stringify([goodsInfos]),
        productType,
        receiverAddr: JSON.stringify(receiveData),
        senderAddr: JSON.stringify(sendData),
        insuranceFlag,
        payType:paytype,
        emergencyFlag,
        firstOrderFlag
      })
    }
    Request(data) {
      let _t = this;
      uploaduserExpressInformation(data).then(res=>{
        if(res.messageModel.code===0){
          Toast.success("下单成功，请耐心等待快递员上门揽件！",2,function() {
            _t.props.history.push("/build/home");
          },true)
        }else{
          Toast.fail(res.messageModel.messageText, 4);
        }
      })
    }
    componentWillMount() {
      // console.log(this.props.orderInfo);
    }
    render() {
      // 寄件人信息 收件人信息 寄付方式  1 支付方式 2 物品类型 3  是否保值
      let {
        sendData,
        receiveData,
        type,
        paytype,
        insuranceFlag,
        goodsInfos
      } = this.props.orderInfo;

      let cmp;
      switch (type) {
        case "1":
          cmp = <PayType/>;
          break;
        case "2":
          cmp = <GoodsType/>;
          break;
        case "3":
          cmp = <AppreciationType/>;
          break;
        default:
          cmp = null;
          break;
      }

      return (
        <div className="deliverInfo_box">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="form_warrper">
            <div className="send_items">
              <div className="send_item">
                <img src={icon_j} alt="" className="send_item_l"/>
                <Link to="/build/writePage/a">
                  <SendInfo sendData={sendData}/>
                </Link>
                <span className="icon-right"/>
              </div>
              <div className="send_item">
                <img src={icon_s} alt="" className="send_item_l"/>
                <Link to="/build/writePage/b">
                  <ReceiveInfo receiveData={receiveData}/>
                </Link>
                <span className="icon-right"/>
              </div>
            </div>
            <div className="send_items">
              <div className="send_type">
                <span className="send_type_title">寄付方式</span>
                <span
                  className="send_type_des"
                  onClick={() => {
                  this
                    .props
                    .showType('1')
                }}>
                  <FormatPayType paytype={paytype}/></span>
              </div>
            </div>
            <div className="send_items">
              <div className="send_type">
                <span className="send_type_title">物品类型</span>
                <span
                  className="send_type_des"
                  onClick={() => {
                  this
                    .props
                    .showType('2')
                }}><GoodsInfos goodsInfos={goodsInfos}/></span>
              </div>
            </div>
            <div className="send_items">
              <div className="send_type">
                <span className="send_type_title">增值服务</span>
                <span
                  className="send_type_des"
                  onClick={() => {
                  this
                    .props
                    .showType('3')
                }}><Insurance insuranceFlag={insuranceFlag}/></span>
              </div>
            </div>
            <div className="send_agreement">
              <AgreeItem
                data-seed="logId"
                onChange={() => {
                this.setState({
                  checkBox: !this.state.checkBox
                });
              }}>
                <span style={{color:'#fff'}}>我同意</span>
                <Link to="/build/protocol">《快件运单契约条款》</Link>
              </AgreeItem>
            </div>
            <div className="send_submit">
              <button
                className="btn"
                onClick={() => {
                this.checkData();
              }}>
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
