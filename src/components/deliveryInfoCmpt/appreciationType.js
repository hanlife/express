import React, { Component } from "react";
import { connect } from "react-redux";
import { Toast } from 'antd-mobile';

import {showType, getInsuranceFlag} from '../../reducer/order.redux'

@connect(state => state.orderInfo,{showType, getInsuranceFlag})
class AppreciationType extends Component {
  constructor(props){
    super(props)
    this.state={
      value:''
    }
    this.resultActionsheet = this.resultActionsheet.bind(this)
  }
  chose(v){
    this.setState({
      value:v
    })
  }
  resultActionsheet(){
    let v = this.state.value
    if(v===''){
      Toast.info("请选择增值服务！", 2, null, false);
      return
    }
    this.props.getInsuranceFlag(v)
  }
  render() {
    return (
      <div>
        <div className="actionsheet_bg" />
        <div className="actionsheet_box actionsheet_anm_in">
          <div className="actionsheet_header">
            <button type="button" className="actionsheet_close" onClick={()=>{this.props.showType('0')}}>
              取消
            </button>
            <button type="button" className="actionsheet_conform" onClick={this.resultActionsheet}>
              确定
            </button>
          </div>
          <div className="actionsheet_body">
            <div className="jifu_type">
              <div>
                <button type="button" className={this.state.value===1?"active":''} onClick={()=>{this.chose(1)}}>
                  保值
                </button>
              </div>
              <div>
                <button type="button" className={this.state.value===0?"active":''} onClick={()=>{this.chose(0)}}>不保值</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AppreciationType;
