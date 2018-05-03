import React, {Component} from 'react';

import Img_card from '../../images/icon-card.png'
import '../../style/writePage.css'

class WritePage extends Component {
    componentWillMount() {
        console.log(this.props.match.params)
    }
    render() {
        return (
            <div className="writePage_box">
                <div className="address_warpper">
                    <div className="address_left">
                        <div>
                            <img src={Img_card} alt="card" className="icon_card"/>>
                            <p>传名片</p>
                        </div>
                    </div>
                    <div className="address_right">
                        <div>
                            <textarea
                                type="text"
                                name=""
                                id=""
                                cols="40"
                                rows="3"
                                placeholder="请粘贴诸如“深圳市宝安区科技园北区 赵日天 23333333333”"
                                className="input_address"></textarea>
                        </div>
                    </div>
                </div>
                <p className="address_tip">
                    <span className="icon_tip"></span>地址识别说明和示例</p>
                <div className="address_from">
                    <div className="address_item">
                        <span className="address_title">姓名:</span>
                        <input type="text" placeholder="请输入寄件人姓名" className="address_name"/>>
                        <span className="form_icon icon_jname"></span>
                    </div>
                    <div className="address_item">
                        <span className="address_title">手机:</span>
                        <input type="text" placeholder="请输入手机号码" className="address_name"/>></div>
                    <div className="address_item">
                        <span className="address_title">省市区:</span>
                        <input type="text" placeholder="请输入寄件人姓名" className="address_name"/>>
                        <span className="form_icon icon_address"></span>
                    </div>
                    <div className="address_item">
                        <span className="address_title">详细地址:</span>
                        <input type="text" placeholder="请输入寄件人姓名" className="address_name"/>></div>
                    <div className="btn_save">
                        <button type="button">保存</button>
                    </div>
                </div>
            </div>
          )
      }
}
export default WritePage