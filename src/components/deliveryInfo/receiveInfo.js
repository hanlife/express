import React, {Component} from "react";

class ReceiveInfo extends Component {
  render() {
    let receiveData = this.props.receiveData;
    if (JSON.stringify(receiveData) === "{}") {
      return <p className="send_item_des">请输入收件人信息</p>;
    } else {
      return (
        <p
          className="send_item_des txt_hid item_active"
          style={{
          display: 'table'
        }}>
          <span
            style={{
            display: "table-cell",
            verticalAlign: "middle",
            lineHeight: "20px",
            whiteSpace: "initial"
          }}>{receiveData.name} {receiveData.telephone} {receiveData.provinceName}{receiveData.cityName}{receiveData.countyName} {receiveData.address}</span>
        </p>
      );
    }
  }
}
export default ReceiveInfo;