import React, {Component} from 'react'
import {connect} from "react-redux";
import {Checkbox} from 'antd-mobile';

import {sendOrderPay} from '../../axios/api'

import ImgLogo from '../../images/img-logo.png'
import iconArrow from '../../images/icon-arrow.png'
import jifenpay from '../../images/icon_jifenpay.png'
import wxPay from "../../images/icon-wxpay.png"
import '../../style/pay.css'

@connect(state => state.orderLists)
class PayDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payList: [],
            discount: true,
            jifen: true,
            wx: false
        };
    }
    componentDidMount() {
        const payList = this
            .props
            .orderLists
            .filter((v) => {
                if (v.checked) {
                    return v
                }
            });
        this.setState({payList: payList})
    }
    pay() {
        // this.props.history.push('/build/evaluate')
        sendOrderPay()
    }
    render() {
        const totle = this.props.totle;

        return (
            <div className='pay_box'>
                <div className="pay_header pay_block">
                    <div className="header_item">
                        <img src={ImgLogo} alt="" className="pay_logo"/>
                    </div>
                    <div className="header_item txt_left">
                        <p className="pay_price_title">应支付</p>
                        <p className="pay_price_box">￥
                            <span className="pay_price">{totle}</span>
                        </p>
                    </div>
                </div>
                <div className="pay_lists pay_block">
                    <p className="pay_lists_title">支付<span className="font-red">{this.state.payList.length}</span>条快递</p>
                    {this
                        .state
                        .payList
                        .map((v, i) => {
                            return (
                                <div className="pay_item" key={v.id}>
                                    <div className="pay_flex font_info">快递{i + 1}：</div>
                                    <div className="pay_flex">{v.senderAddr.name}</div>
                                    <div className="pay_flex">
                                        <img src={iconArrow} alt="" className="icon_arrow"/>
                                    </div>
                                    <div className="pay_flex">{v.receiverAddr.name}</div>
                                </div>
                            )
                        })}
                </div>
                <div className="pay_discount pay_block">
                    <div className="discount_flex">使用优惠券</div>
                    <div
                        className="discount_flex"
                        style={{
                        textAlign: "right"
                    }}>
                        <Checkbox
                            onChange={() => this.setState({
                            discount: !this.state.discount
                        })}
                            checked={this.state.discount}></Checkbox>
                    </div>
                </div>
                <div className="pay_type pay_block">
                    <p className="pay_lists_title">选择付款方式</p>
                    <div className="pay_type_item">
                        <div className="pay_type_flex">
                            <img className="icon_type_ye" src={jifenpay} alt=""/>
                            <span>余额支付</span>
                        </div>
                        <div className="pay_type_flex txt_right">
                            <span
                                className="font-red"
                                style={{
                                marginRight: '10px',
                                verticalAlign: "middle"
                            }}>9折优惠</span>
                            <Checkbox
                                onChange={() => this.setState({
                                jifen: !this.state.jifen
                            })}
                                checked={this.state.jifen}></Checkbox>
                        </div>
                    </div>
                    <div className="pay_type_item">
                        <div className="pay_type_flex">
                            <img className="icon_type_wx" src={wxPay} alt=""/>
                            <span>微信支付</span>
                        </div>
                        <div className="pay_type_flex txt_right">
                            <Checkbox
                                onChange={() => this.setState({
                                wx: !this.state.wx
                            })}
                                checked={this.state.wx}></Checkbox>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: '70px'
                }}></div>
                <div className="dlj_foot">
                    <div className="foot_item">
                        <div
                            className="pay_btn"
                            onClick={() => {
                            this.pay()
                        }}>支付</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PayDetail