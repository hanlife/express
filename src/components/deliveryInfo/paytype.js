import React, {Component} from 'react'

class FormatPayType extends Component {
    render() {
        let paytype = this.props.paytype
        // 1、到付，2、在线支付，3、现金，4、POS 支付
        let paytype_Str
        switch (paytype) {
            case 1:
                paytype_Str = "到付"
                break;
            case 2:
                paytype_Str = "在线支付"
                break;
            default:
                paytype_Str = ''
                break;
        }
        if (paytype_Str !== '') {
            return (
                <i className="type_active">{paytype_Str}</i>
            )
        } else {
            return (
                <i>请选择支付方式</i>
            )
        }
    }
}
export default FormatPayType