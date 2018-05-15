import React, {Component} from 'react'
import {Checkbox} from 'antd-mobile';
import {connect} from "react-redux";
import {checked} from "../../reducer/orderLists.redux";

@connect(state => state.orderLists, {checked})
class OrderCheckbox extends Component {
    onChange(id) {
        this
            .props
            .checked(id, this.props.orderLists)
    }
    render() {
        const {id, checked, order_state} = this.props.data
        if (order_state === "DFK") {
            return (
                <Checkbox onChange={() => this.onChange(id)} checked={checked}></Checkbox>
            )
        } else {
            return null
        }

    }
}
export default OrderCheckbox