import React, {Component} from 'react'
import {Checkbox} from 'antd-mobile';

import icon_Arrow from '../../images/icon-arrow.png'

const CheckboxItem = Checkbox.CheckboxItem;

class OrderItem extends Component {
    onChange(id){
        console.log(id)
    }
    render() {
        const {orderId, time, jijian, delv, fadi, shoudi} = this.props.data
        return (
            <div className='orderList'>
                <div className="orderItem">
                    <div className="item_content">
                        <div className="item_time">{time}</div>
                        <div className="item-flex item_person">
                            <span>{jijian}</span>
                            <span className="icon_arrow">
                                <img src={icon_Arrow} alt=""/>
                            </span>
                            <span>{delv}</span>
                        </div>
                        <div className="item-flex item_way">
                            <span>{fadi}</span>
                            <span className="font-red">待揽件</span>
                            <span>{shoudi}</span>
                        </div>
                    </div>
                    <div className="item_check">
                        <CheckboxItem onChange={() => this.onChange(orderId)}>
                        </CheckboxItem>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderItem