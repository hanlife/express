import React, { Component } from "react";

class ReceiveInfo extends Component {
  render() {
    let receiveData = this.props.receiveData;
    if (!receiveData) {
      return <p className="send_item_des">请输入收件人信息</p>;
    } else {
      return (
        <p className="send_item_des txt_hid item_active">{receiveData.name} {receiveData.phone} {receiveData.shq} {receiveData.address}</p>
      );
    }
  }
}
export default ReceiveInfo;