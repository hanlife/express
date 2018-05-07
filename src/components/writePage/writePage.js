import React, {Component} from "react";
import axios from 'axios'
import {connect} from "react-redux";
import {Toast} from 'antd-mobile';

import {getReceiveData} from "../../reducer/order.redux";

import Img_card from "../../images/icon-card.png";
import "../../style/writePage.css";

@connect(state => state, {getReceiveData})
class WritePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      phone:'',
      shq:'',
      provinceName:'',
      cityName:'',
      countyName:'',
      address:''
    }
  }
  onChange(e) {
    let file = e.target.files[0]
    console.log(file)
    let param = new FormData() // 创建form对象
    param.append('video', file, file.name) // 通过append向form对象添加数据
    param.append('chunk', '0') // 添加form表单中其他数据
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // 添加请求头
    axios
      .post('http://localhost:3000/video', param, config)
      .then(response => {
        console.log(response.data)
        this.setState({
          name:'hanlaifu',
          phone:'13760315374',
          address:'宝路商务中心503',
          provinceName:'广东省',
          cityName:'深圳市',
          countyName:'南山区'
        })
      })
    // this.setState({   files, });
  }
  componentWillMount() {
    this.setState({infoType: this.props.match.params.type})
  }
  handChage(k, v) {
    this.setState({[k]: v});
  }
  submit() {
    let {name, phone, shq, address} = this.state;
    if (!name || !phone || !shq || !address) {
      Toast.info("请填写完整！", 2, null, false);
      return
    }
    this
      .props
      .getReceiveData(this.state);
    this
      .props
      .history
      .push("/deliveryInfo");
  }
  render() {
    return (
      <div className="writePage_box">
        <div className="address_warpper">
          <div className="address_left">
            <div>
              <img src={Img_card} alt="card" className="icon_card"/>
              <p>传名片</p>
              <input
                type="file"
                className="card_upload"
                onChange={(e) => {
                this.onChange(e)
              }}
                accept="image/gif,image/jpeg,image/jpg,image/png"/>
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
                className="input_address"/>
            </div>
          </div>
        </div>
        <p className="address_tip">
          <span className="icon_tip"/>地址识别说明和示例
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
              className="address_name"/>
            <span className="form_icon icon_jname"/>
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
              className="address_name"/>
          </div>
          <div className="address_item">
            <span className="address_title">省市区:</span>
            <input
              type="text"
              placeholder="请选择省市区"
              onChange={e => {
              this.handChage("shq", e.target.value);
            }}
              className="address_name"/>
            <span className="form_icon icon_address"/>
          </div>
          <div className="address_item">
            <span className="address_title">详细地址:</span>
            <input
              type="text"
              placeholder="请输入详细地址"
              value={this.state.address}
              onChange={e => {
              this.handChage("address", e.target.value);
            }}
              className="address_name"/>
          </div>
          <div className="btn_save">
            <button
              type="button"
              onClick={() => {
              this.submit();
            }}>
              保存
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default WritePage;
