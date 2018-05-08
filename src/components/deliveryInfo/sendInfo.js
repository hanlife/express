import React, { Component } from "react";

class SendInfo extends Component {
  render() {
    let sendData = this.props.sendData;
    console.log(sendData)
    if (JSON.stringify(sendData)==="{}") {
      return <p className="send_item_des">请输入寄件人信息</p>;
    } else {
      return (
        <p className="send_item_des txt_hid item_active">{sendData.name} {sendData.phone} {sendData.provinceName}{sendData.cityName}{sendData.countyName} {sendData.address}</p>
      );
    }
  }
}
export default SendInfo;
