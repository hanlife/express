import React, {Component} from 'react'

import DetailCmp from './detailCmp'

const orderDetail = {
    clientName: '王XX', // 寄件人姓名
    phone: '13760315374', //寄件人手机号
    senderAddr: '寄件地址深圳市宝安区XXX', // 联系地址
    receiverAddr: {
        address: '收件人地址深圳市罗湖区XXX',
        cityName: '深圳市',
        countyName: '罗湖区',
        name: '罗小风',
        provinceName: '广东省',
        telephone: '1554546456564'
    },
    goodsInfo: { // 物品信息
        goodName: '文件',
        qty: 2
    },
    payType: 1, // 支付方式（1、到付 2、在线支付 3、现金  4、寄付（月结））
    insuranceFlag: 0, //是否需要保价服务（0、不需要  1、需要）
}

class DljDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        this.setState({data: orderDetail})
    }
    render() {
        return (
            <div className=''>
                <DetailCmp data={this.state.data}></DetailCmp>
            </div>
        )

    }
}
export default DljDetail