import React, { Component } from "react";
import { connect } from "react-redux";
import { Toast } from 'antd-mobile';

import {showType, getPayType} from '../../reducer/order.redux'

@connect(state => state.orderInfo,{showType, getPayType})
class PayType extends Component {
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
      Toast.info("请选择寄付方式！", 2, null, false);
      return
    }
    this.props.getPayType(v)
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
                <button type="button" className={this.state.value===2?"active":''} onClick={()=>{this.chose(2)}}>
                  寄付
                </button>
              </div>
              <div>
                <button type="button" className={this.state.value===1?"active":''} onClick={()=>{this.chose(1)}}>到付</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PayType;
