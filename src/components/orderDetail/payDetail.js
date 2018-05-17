import React, {Component} from 'react'

import ImgLogo from '../../images/img-logo.png'
import iconArrow from '../../images/icon-arrow.png'
import jifenpay from '../../images/icon_jifenpay.png'
import wxPay from "../../images/icon-wxpay.png"
import '../../style/pay.css'

class PayDetail extends Component {
    render() {
        return (
            <div className='pay_box'>
                <div className="pay_header pay_block">
                    <div className="header_item">
                        <img src={ImgLogo} alt="" className="pay_logo"/>
                    </div>
                    <div className="header_item txt_left">
                        <p className="pay_price_title">应支付</p>
                        <p className="pay_price_box">￥
                            <span className="pay_price">19.00</span>
                        </p>
                    </div>
                </div>
                <div className="pay_lists pay_block">
                    <p className="pay_lists_title">支付<span className="font-red">3</span>条快递</p>
                    <div className="pay_item">
                        <div className="pay_flex font_info">快递1：</div>
                        <div className="pay_flex">赵日天</div>
                        <div className="pay_flex">
                            <img src={iconArrow} alt="" className="icon_arrow"/>
                        </div>
                        <div className="pay_flex">赵日天</div>
                    </div>
                </div>
                <div className="pay_discount pay_block">
                    <div className="discount_flex">使用优惠券</div>
                    <div className="discount_flex">
                        <input type="checkbox"/>
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
                            <span className="font-red">9折优惠</span>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="pay_type_item">
                        <div className="pay_type_flex">
                            <img className="icon_type_wx" src={wxPay} alt=""/>
                            <span>微信支付</span>
                        </div>
                        <div className="pay_type_flex txt_right">
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: '44px'
                }}></div>
            </div>
        )
    }
}
export default PayDetail