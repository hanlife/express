import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Toast, TextareaItem } from "antd-mobile";
import ChoseArea from "./choseArea";
import { getReceiveData, getArea } from "../../reducer/order.redux";
import { AreaSplit } from "../../utils/index";

import Img_card from "../../images/icon-card.png";
import "../../style/writePage.css";

// 函数节流变量
let THROTTLE = true;

@connect(state => state.orderInfo, { getReceiveData, getArea })
class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      pickerValue: "选择省市区",
      provinceName: "",
      cityName: "",
      countyName: ""
    };
    this.onHandChange = this.onHandChange.bind(this);
  }
  onChange(e) {
    let file = e.target.files[0];
    console.log(file);
    let param = new FormData(); // 创建form对象
    param.append("video", file, file.name); // 通过append向form对象添加数据
    param.append("chunk", "0"); // 添加form表单中其他数据
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    // 添加请求头
    axios.post("http://localhost:3000/video", param, config).then(response => {
      console.log(response.data);
      this.setState({
        name: "hanlaifu",
        phone: "13760315374",
        address: "宝路商务中心503",
        provinceName: "广东省",
        cityName: "深圳市",
        countyName: "南山区"
      });
    });
    // this.setState({   files, });
  }
  // 粘贴地址
  onCopy(e) {
    let _t = this
    // 广东省深圳市宝安区宝路商务中心韩来福13760315374
    if (e.target.value.length < 13) {
      Toast.info("请按提示规则粘贴内容", 2, null, false);
      return;
    }
    // 函数节流
    if (THROTTLE) {
      THROTTLE = false;
      setTimeout(function() {
        Requset();
        THROTTLE = true;
      }, 1500);
    }
    function Requset() {
      AreaSplit(e.target.value)
        .then(res => {
          _t.setState({
            name: res.name,
            phone: res.phone,
            address: res.address,
            pickerValue: `${res.province},${res.city},${res.district}`,
            provinceName: res.province,
            cityName: res.city,
            countyName: res.district
          });
          _t.props.getArea({
            provinceName: res.province,
            cityName: res.city,
            countyName: res.district,
            infoType: _t.state.infoType
          });
        })
        .catch(err => {
          Toast.info(err, 2, null, false);
        });
    }
  }
  // 选择地址组件
  onHandChange({ provinceName, cityName, countyName, pickerValue }) {
    this.setState({ provinceName, cityName, countyName, pickerValue });
  }
  componentWillMount() {
    this.setState({ infoType: this.props.match.params.type });
  }
  handChage(k, v) {
    this.setState({ [k]: v });
  }
  submit() {
    let {
      name,
      phone,
      address,
      provinceName,
      cityName,
      countyName
    } = this.state;
    if (
      !name ||
      !phone ||
      !address ||
      !provinceName ||
      !cityName ||
      !countyName
    ) {
      Toast.info("请填写完整！", 2, null, false);
      return;
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
              <img src={Img_card} alt="card" className="icon_card" />
              <p>传名片</p>
              <input
                type="file"
                className="card_upload"
                onChange={e => {
                  this.onChange(e);
                }}
                accept="image/gif,image/jpeg,image/jpg,image/png"
              />
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
                onChange={e => {
                  this.onCopy(e);
                }}
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
              value={this.state.name}
              onChange={e => {
                this.handChage("name", e.target.value);
              }}
              className="address_name"
            />
            <span className="form_icon icon_jname" />
          </div>
          <div className="address_item">
            <span className="address_title">手机:</span>
            <input
              type="text"
              placeholder="请输入手机号码"
              value={this.state.phone}
              onChange={e => {
                this.handChage("phone", e.target.value);
              }}
              className="address_name"
            />
          </div>
          <div className="address_item">
            <ChoseArea
              infoType={this.state.infoType}
              pickerValue={this.state.pickerValue}
              onHandChange={this.onHandChange}
            />
          </div>
          <div className="address_item">
            <span className="address_title">详细地址:</span>
            <TextareaItem
              placeholder="请输入详细地址"
              value={this.state.address}
              onChange={v => {
                this.handChage("address", v);
              }}
              autoHeight
            />
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
