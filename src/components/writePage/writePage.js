import React, {Component} from "react";
import {connect} from "react-redux";
import {Toast, TextareaItem} from "antd-mobile";
import ChoseArea from "./choseArea";
import {getReceiveData, getArea} from "../../reducer/order.redux";
import {AreaSplit} from "../../utils/index";
import {GetWxsign} from '../../axios/api'
import Examples from './examples'
import {bcOcr, getAddress} from '../../axios/api'

import Img_card from "../../images/icon-card.png";
import "../../style/writePage.css";
// 函数节流变量
let THROTTLE = true;

@connect(state => state.orderInfo, {getReceiveData, getArea})
class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      telephone: "",
      address: "",
      pickerValue: "选择省市区",
      provinceName: "",
      cityName: "",
      countyName: "",
      showTip: false
    };
    this.onHandChange = this
      .onHandChange
      .bind(this);
  }
  onChange(e) {
    let _t = this
    let file = e.target.files[0];
    let param = new FormData(); // 创建form对象
    param.append("file1", file, file.name); // 通过append向form对象添加数据
    // s上传名片
    bcOcr(param).then(res => {
      if (res.messageModel.code === 0) {
        _t.setState({
          name: res.dataModel.user_name || "",
          telephone: res.dataModel.phone || "",
          address: res.dataModel.address || ""
        })
        if (res.dataModel.address !== '') {
          getAddress({address: res.dataModel.address}).then(res => {
            if (res.messageModel.code === 0) {
              _t.setState({cityName: res.dataModel.city, provinceName: res.dataModel.province, countyName: res.dataModel.district})
            }
          })
        }
      }
    }) // 添加请求头

  }
  // 粘贴地址
  onCopy(e) {
    let _t = this
    let value = e.target.value
    // 广东省深圳市宝安区宝路商务中心13760315374韩来福 函数节流
    if (THROTTLE) {
      THROTTLE = false;
      setTimeout(function () {
        Requset();
        THROTTLE = true;
      }, 500);
    }
    function Requset() {
      if (value < 13) {
        Toast.info("请按提示规则粘贴内容", 2, null, false);
        return;
      }
      AreaSplit(value).then(res => {
        _t.setState({
          name: res.name,
          telephone: res.phone,
          address: res.address,
          pickerValue: `${res.province},${res.city},${res.district}`,
          provinceName: res.province,
          cityName: res.city,
          countyName: res.district
        });
        _t
          .props
          .getArea({provinceName: res.province, cityName: res.city, countyName: res.district, infoType: _t.state.infoType});
      }).catch(err => {
        Toast.info(err, 2, null, false);
      });
    }
  }
  // 选择地址组件
  onHandChange({provinceName, cityName, countyName, pickerValue}) {
    this.setState({provinceName, cityName, countyName, pickerValue});
  }
  // 获取微信定位
  getLocation() {
    Toast.info("定位失败，请选择地址", 1, null, false);
    // window   .wx   .getLocation({     type: 'wgs84', //
    // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'     success: function
    // (res) {       var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90       var
    // longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。     }   });
  }
  // 获取微信地址
  OpenAddress() {
    // let _t = this;
    // window
    //   .wx
    //   .openAddress({
    //     success: function (res) {
    //       console.log(res)
    //       _t.state = {
    //         name: res.userName,
    //         telephone: res.telNumber,
    //         address: res.detailInfo,
    //         pickerValue: `${res.provinceName},${res.cityName},${res.countryName}`,
    //         provinceName: res.provinceName,
    //         cityName: res.cityName,
    //         countyName: res.countryName
    //       };
    //       _t
    //         .props
    //         .getArea({provinceName: res.provinceName, cityName: res.cityName, countyName: res.countryName, infoType: _t.state.infoType});
    //     }
    //   });
  }
  componentWillMount() {
    this.setState({infoType: this.props.match.params.type});
    let parmsUrl = encodeURIComponent(window.location.href.split('#')[0]);

    // GetWxsign({url: parmsUrl}).then(res => {
    //   // 签名配置
    //   window
    //     .wx
    //     .config({
    //       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //       appId: "wxd80696fc533d135c", // 必填，公众号的唯一标识
    //       timestamp: res.timestamp, // 必填，生成签名的时间戳
    //       nonceStr: res.nonceStr, // 必填，生成签名的随机串
    //       signature: res.signature, // 必填，签名，见附录1
    //       jsApiList: ['getLocation', "openAddress"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     });
    //   window
    //     .wx
    //     .checkJsApi({
    //       jsApiList: [
    //         'getLocation', "openAddress"
    //       ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    //       success: function (res) {
    //         console.log(res)
    //         // 以键值对的形式返回，可用的api值true，不可用为false
    //         // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    //       }
    //     });
    // })
  }
  handChage(k, v) {
    this.setState({[k]: v});
  }
  submit() {

    let {
      name,
      telephone,
      address,
      provinceName,
      cityName,
      countyName
    } = this.state;
    if (!name || !telephone || !address || !provinceName || !cityName || !countyName) {
      Toast.info("请填写完整！", 2, null, false);
      return;
    }
    let phone = telephone.replace(/\s+/g, "")
    let ismobile = /^1[3|4|5|6|7|8|9]\d{9}$/;
    if (!ismobile.test(phone)) {
      Toast.info("请输入正确的手机号", 2, null, false);
      return
    }
    this
      .props
      .getReceiveData(this.state);
    this
      .props
      .history
      .push("/build/deliveryInfo");
  }
  render() {
    return (
      <div className="writePage_box">
        <div className="address_warpper">
          <div className="address_left">
            <div>
              <img src={Img_card} alt="card" className="icon_card"/>
              <p>传名片</p>
              <form encType="multipart/form-data" method="post">
                <input
                  type="file"
                  className="card_upload"
                  name="file1"
                  onChange={e => {
                  this.onChange(e);
                }}
                  accept="image/gif,image/jpeg,image/jpg,image/png"/>
              </form>
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
                placeholder="请粘贴诸如“深圳市宝安区科技园北区 李XX 137XXXX5532”"
                className="input_address"
                onChange={e => {
                this.onCopy(e);
              }}/>
            </div>
          </div>
        </div>
        <p
          className="address_tip"
          onClick={() => {
          this.setState({showTip: true})
        }}>
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
            <span
              className="form_icon icon_jname"
              onClick={() => {
              this.OpenAddress()
            }}/>
          </div>
          <div className="address_item">
            <span className="address_title">手机:</span>
            <input
              type="text"
              placeholder="请输入手机号码"
              value={this.state.telephone}
              onChange={e => {
              this.handChage("telephone", e.target.value);
            }}
              className="address_name"/>
          </div>
          <div className="address_item">
            <ChoseArea
              infoType={this.state.infoType}
              pickerValue={this.state.pickerValue}
              onHandChange={this.onHandChange}/>
            <span
              className="form_icon icon_address"
              onClick={() => {
              this.getLocation()
            }}></span>
          </div>
          <div className="address_item">
            <span className="address_title">详细地址:</span>
            <TextareaItem
              placeholder="请输入详细地址"
              value={this.state.address}
              onChange={v => {
              this.handChage("address", v);
            }}
              autoHeight/>
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
        <Examples
          showTip={this.state.showTip}
          onhandleClose={() => {
          this.setState({showTip: false})
        }}></Examples>
      </div>
    );
  }
}

export default WritePage;
