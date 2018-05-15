import React, {Component} from 'react'
import {Link} from "react-router-dom"

import icon_Arrow from '../../images/icon-arrow.png'
import OrderCheckbox from './checkbox';

class OrderItem extends Component {

    render() {
        const {
            id,
            makeOrderTime,
            order_state_str,
            order_state,
            receiverAddr,
            senderAddr
        } = this.props.data
        const receiverName = receiverAddr.name
        const receiverCountyName = receiverAddr.countyName
        const senderName = senderAddr.name
        const senderCountyName = senderAddr.countyName

        let Url
        switch (order_state) {
            case "DLJ":
                Url = `/build/dljDetail/${id}`
                break;
            case "DFK":
                Url = `/build/dfkDetail/${id}`
                break;
            case "PSZ":
                Url = `/build/courier/${id}`
                break;
            case "YQS":
                Url = `/build/courier/${id}`
                break;
            default:
                break;
        }
        return (
            <div className='orderList'>
                <div className="orderItem">
                    <Link to={Url}>
                        <div className="item_content">
                            <div className="item_time">{makeOrderTime}</div>
                            <div className="item-flex item_person">
                                <span>{senderName}</span>
                                <span className="icon_arrow">
                                    <img src={icon_Arrow} alt=""/>
                                </span>
                                <span>{receiverName}</span>
                            </div>
                            <div className="item-flex item_way">
                                <span>{senderCountyName}</span>
                                <span className="font-red">{order_state_str}</span>
                                <span>{receiverCountyName}</span>
                            </div>
                        </div>
                    </Link>
                    <div className="item_check">
                        <OrderCheckbox data={this.props.data}></OrderCheckbox>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderItem