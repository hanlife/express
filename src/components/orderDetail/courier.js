import React, {Component} from 'react'

import '../../style/courier.css'
import banner from '../../images/img-banner.png'
import person from '../../images/icon-person.png'
import phone from '../../images/icon-phone.png'
import evaluate from '../../images/icon-evaluate.png'

import {queryTraceInfo, getSendInfo} from '../../axios/api'
import {Toast} from 'antd-mobile';
import {Link} from 'react-router-dom';

function CourierDetail(props) {
    if (props.data.length === 0) {
        return (
            <div className="item">
                <p
                    style={{
                    textAlign: "center",
                    flex: "1"
                }}>------ 暂无物流信息 -----</p>
            </div>
        )
    } else {
        return (
            <div>{props
                    .data
                    .forEach(v => {
                        return (
                            <div className="item">
                                <div className="left">
                                    <div>{v.opTime}</div>
                                    <span className="icon-dot"></span>
                                </div>
                                <div className="right">
                                    <p>{v.opContent}</p>
                                    <p>{v.opUser
                                            ? `操作人${v.opUser}`
                                            : ''}</p>
                                </div>
                            </div>
                        )
                    })}</div>
        )
    }
}

class Courier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            sendInfo: {}
        }
    }
    componentDidMount() {
        const waybillCode = this.props.match.params.orderId
        // 物流信息
        queryTraceInfo({waybillCode: waybillCode}).then(res => {
            if (res.dataModel) {
                let arr = JSON.parse(res.dataModel);
                this.setState({data: arr})
            } else {
                Toast.info(res.messageModel.messageText, 4)
            }
            // 订单信息
            getSendInfo({waybillCode: waybillCode}).then(ress => {
                if (ress.messageModel.code === 0) {
                    let sendInfo = ress.dataModel
                    sendInfo.receiverAddr = JSON.parse(sendInfo.receiverAddr)
                    this.setState({sendInfo: sendInfo})
                } else {
                    Toast.info(ress.messageModel.messageText, 4)
                }
            })
        })
    }
    render() {
        const {sendInfo} = this.state
        return (
            <div className='courier_box'>
                <div className="header">
                    <img src={banner} alt="logo" className="banner"/>
                </div>
                <div className="warpper_box">
                    <div className="bg-box"></div>
                    <div className="courier-info">
                        <div className="info-flex line-height">
                            <img src={person} alt="" className="courier-pic"/>
                        </div>
                        <div className="info-flex">
                            <a
                                id="telphone"
                                href={sendInfo.deliveryman_phone
                                ? `tel:${sendInfo.deliveryman_phone}`
                                : "tel:4000-071711"}
                                style={{
                                display: "block"
                            }}
                                title="">
                                <img src={phone} alt="" className="courier-ph"/>
                                <p className="info-txt" id="deliveryman">快递员：{sendInfo.deliveryman}</p>
                            </a>
                        </div>
                        {sendInfo.order_state === "YQS"
                            ? (
                                <div className="info-flex">
                                    <Link to="/build/evaluate">
                                        <img src={evaluate} alt="" className="courier-evaluate"/>
                                        <p className="info-txt" id="deliveryman">评价</p>
                                    </Link>
                                </div>
                            )
                            : (null)}
                    </div>
                </div>
                <div className="desc_box">
                    <div className="track-num" id="trackNum">快递单号：{sendInfo.waybillCode}</div>
                    <div className="recipients-info">
                        <p id="recipient">收件人：{sendInfo.receiverAddr
                                ? sendInfo.receiverAddr.name
                                : ''}
                        </p>
                        <p id="address">联系地址：{sendInfo.receiverAddr
                                ? sendInfo.receiverAddr.address
                                : ''}</p>
                    </div>
                    <div className="lists">
                        <CourierDetail data={this.state.data}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Courier