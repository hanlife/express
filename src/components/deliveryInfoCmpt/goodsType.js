import React, { Component } from "react";
class GoodsType extends Component {
  render() {
    return (
      <div>
        <div className="actionsheet_bg" />
        <div className="actionsheet_box actionsheet_anm_in">
          <div className="actionsheet_header">
            <button type="button" className="actionsheet_close">
              取消
            </button>
            <button type="button" className="actionsheet_conform">
              确定
            </button>
          </div>
          <div className="actionsheet_body">物品类型</div>
        </div>
      </div>
    );
  }
}
export default GoodsType;
