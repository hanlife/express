import React, {Component} from 'react'
import {Toast} from "antd-mobile";
import {connect} from "react-redux";
import {cancelOrder} from '../../axios/api'
import {checked} from '../../reducer/orderLists.redux'

import DetailCmp from './detailCmp'

@connect(state => state.orderLists, {checked})
class DfkDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            orderId: ''
        }
    }
    componentDidMount() {
        let _t = this;
        const Id = this.props.match.params.orderId
        let lists = this.props.orderLists

        for (let index = 0; index < lists.length; index++) {
            if (lists[index].id === Id) {
                _t.setState({data: lists[index], orderId: lists[index].waybillCode})
                break
            }
        }
        this.props.checked(Id, this.props.orderLists)
    }
    pay() {
        this.props.history.push('/build/payDetail')
    }
    closeOrder() {
        let _t = this
        cancelOrder({waybillCode: this.state.orderId}).then(res => {
            if (res.messageModel.code === 0) {
                Toast
                    .success("订单取消成功", 2, function () {
                        _t
                            .props
                            .history
                            .push("/build/order/dfk");
                    }, true)
            } else {
                Toast.fail(res.messageModel.messageText, 4);
            }
        })
    }
    render() {
        let {deliveryMoney} = this.state.data
        return (
            <div className='dfkDetail_box'>
                <DetailCmp data={this.state.data}></DetailCmp>
                <div className="dlj_foot">
                    <div
                        className="foot_item"
                        style={{
                        fontSize: '14px'
                    }}>
                        <span>快递费</span>
                        <span className="font-red">￥{deliveryMoney}</span>
                    </div>
                    <div className="foot_item">
                        <div
                            className="close_btn"
                            onClick={() => {
                            this.closeOrder()
                        }}>取消订单</div>
                    </div>
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
export default DfkDetail