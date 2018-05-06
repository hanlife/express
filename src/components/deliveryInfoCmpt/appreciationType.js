import React, { Component } from "react";

class AppreciationType extends Component {
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
          <div className="actionsheet_body">
            <div className="jifu_type">
              <div>
                <button type="button" className="active">
                  保值
                </button>
              </div>
              <div>
                <button type="button">不保值</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppreciationType;
