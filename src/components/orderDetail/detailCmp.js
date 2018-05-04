import React, {Component} from 'react'

import "../../style/orderDetail.css"

class DetailCmp extends Component {
    render() {
        const data = this.props.data
        if (JSON.stringify(this.props.data) === "{}") {
            return null
        }
        switch (data.payType) {
            case 1:
                data.payTypeName = "到付"
                break;
            case 2:
                data.payTypeName = "在线支付"
                break;
            case 3:
                data.payTypeName = "现金"
                break;
            case 4:
                data.payTypeName = "寄付"
                break;
            default:
                data.payTypeName = "未知"
                break;
        }
        return (
            <div className="detail_box">
                <div className="detail_warpper">
                    <p className="detail_title">寄件人</p>
                    <div className="detail_item">
                        <span>姓名：</span>
                        <span>{data.clientName}</span>
                    </div>
                    <div className="detail_item">
                        <span>手机：</span>
                        <span>{data.phone}</span>
                    </div>
                    <div className="detail_item detail_flex">
                        <span>联系地址：</span>
                        <span className="detail_flex_span">{data.senderAddr}</span>
                    </div>
                </div>
                <div className="detail_warpper">
                    <p className="detail_title">收件人</p>
                    <div className="detail_item">
                        <span>姓名：</span>
                        <span>{data.receiverAddr.name}</span>
                    </div>
                    <div className="detail_item">
                        <span>手机：</span>
                        <span>{data.receiverAddr.telephone}</span>
                    </div>
                    <div className="detail_item detail_flex">
                        <span>联系地址：</span>
                        <span className="detail_flex_span">{data.receiverAddr.address}</span>
                    </div>
                </div>
                <div className="detail_other">
                    <div className="other_info">
                        <p className="detail_title">其他信息</p>
                        <div className="other_flex">
                            <div>
                                <span>寄付方式：</span>
                                <span>{data.payTypeName}</span>
                            </div>
                            <div>
                                <span>增值服务：</span>
                                <span>{data.insuranceFlag
                                        ? "保值"
                                        : "不保值"}</span>
                            </div>
                        </div>
                        <div className="other_flex">
                            <div>
                                <span>物品信息：</span>
                                <span>{`${data.goodsInfo.goodName}*${data.goodsInfo.qty}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailCmp