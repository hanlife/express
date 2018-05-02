import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import '../../style/deliverInfo.css'

import logo from '../../images/img-logo.png'
import icon_s from '../../images/icon-s.png'
import icon_j from '../../images/icon-j.png'

class deliveryInfo extends Component {
    render() {
        return (
            <div className="deliverInfo_box">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="form_warrper">
                    <div className="send_items">
                        <div className="send_item">
                            <img src={icon_j} alt="" className="send_item_l"/>
                            <Link to="/writePage/send">
                                <p className="send_item_des txt_hid item_active">请输入寄件人信息请输入寄件人信息请输入寄件人信息请输入寄件人信息</p>
                            </Link>
                            <span className="icon-right"></span>
                        </div>
                        <div className="send_item">
                            <img src={icon_s} alt="" className="send_item_l"/>
                            <Link to="/writePage/sendreceive">
                                <p className="send_item_des txt_hid">请输入寄件人信息</p>
                            </Link>
                            <span className="icon-right"></span>
                        </div>
                    </div>
                    <div className="send_items">
                        <div className="send_type">
                            <span className="send_type_title">寄付方式</span>
                            <span className="send_type_des">请选择寄付方式</span>
                        </div>
                    </div>
                    <div className="send_items">
                        <div className="send_type">
                            <span className="send_type_title">物品类型</span>
                            <span className="send_type_des type_active">文件*2</span>
                        </div>
                    </div>
                    <div className="send_items">
                        <div className="send_type">
                            <span className="send_type_title">增值服务</span>
                            <span className="send_type_des type_active">保值</span>
                        </div>
                    </div>
                    <div className="send_agreement">
                        <p></p>
                        <p>我同意
                            <a href="">《xxxx》</a>
                        </p>
                    </div>
                    <div className="send_submit">
                        <button className="btn">下一步</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default deliveryInfo