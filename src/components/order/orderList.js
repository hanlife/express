import React, {Component} from 'react'

class OrderList extends Component {
    render() {
        return (
            <div className='orderList_box'>
                {this.props.children}
            </div>
        )
    }
}
export default OrderList