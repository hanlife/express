import React, {Component} from "react";
import {connect} from "react-redux";
import {Toast} from 'antd-mobile';

import {showType, getGoodsInfo} from '../../reducer/order.redux'

@connect(state => state.orderInfo, {showType, getGoodsInfo})
class GoodsType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      goodsName: '',
      qty: 1,
      height: 1,
      lenght: 1,
      qtyUnit: "011",
      weight: 1,
      width: 1
    }
    this.resultActionsheet = this
      .resultActionsheet
      .bind(this)
    this.reduce = this
      .reduce
      .bind(this)
    this.add = this
      .add
      .bind(this)
  }
  reduce() {
    let qty = this.state.qty
    qty--;
    qty = qty <= 0
      ? 1
      : qty
    this.setState({qty: qty})
  }
  add() {
    let qty = this.state.qty
    qty++;
    this.setState({qty: qty})
  }
  chose(a, n) {
    this.setState({active: a, goodsName: n})
  }
  resultActionsheet() {
    let v = this.state.goodsName
    if (v === '') {
      Toast.info("请选择物品类型！", 2, null, false);
      return
    }
    let goodsInfos = this.state
    this
      .props
      .getGoodsInfo(goodsInfos)
  }

  render() {
    return (
      <div>
        <div className="actionsheet_bg"/>
        <div className="actionsheet_box actionsheet_anm_in">
          <div className="actionsheet_header">
            <button
              type="button"
              className="actionsheet_close"
              onClick={() => {
              this
                .props
                .showType('0')
            }}>
              取消
            </button>
            <button
              type="button"
              className="actionsheet_conform"
              onClick={this.resultActionsheet}>
              确定
            </button>
          </div>
          <div className="actionsheet_body">
            <div className="goodsNum">
              <div className="goods_title">物品数量</div>
              <div className="goods_btn">
                <span className="icon icon_reduce" onClick={this.reduce}></span>
                <span className="goods_num">{this.state.qty}</span>
                <span className="icon icon_add" onClick={this.add}></span>
              </div>
            </div>
            <div className="goodsType">
              <p className="goods_title">物品类型</p>
              <div className="goodstype_item">
                <button
                  type="button"
                  className={this.state.active === 1
                  ? "active"
                  : ''}
                  onClick={() => {
                  this.chose(1, '文件')
                }}>文件</button>
                <button
                  type="button"
                  className={this.state.active === 2
                  ? "active"
                  : ''}
                  onClick={() => {
                  this.chose(2, '饰品')
                }}>饰品</button>
                <button
                  type="button"
                  className={this.state.active === 3
                  ? "active"
                  : ''}
                  onClick={() => {
                  this.chose(3, '电子产品')
                }}>电子产品</button>
                <button
                  type="button"
                  className={this.state.active === 4
                  ? "active"
                  : ''}
                  onClick={() => {
                  this.chose(4, '生活用品')
                }}>生活用品</button>
                <button
                  type="button"
                  className={this.state.active === 5
                  ? "active"
                  : ''}
                  onClick={() => {
                  this.chose(5, '非常规物件')
                }}>非常规物件</button>
                <button
                  type="button"
                  style={{
                  visibility: "hidden"
                }}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GoodsType;
