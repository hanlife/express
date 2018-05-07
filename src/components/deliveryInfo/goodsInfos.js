import React, {Component} from 'react'

class GoodsInfos extends Component {
    render() {
        let goodsInfos = this.props.goodsInfos
        console.log(goodsInfos)
        if ( JSON.stringify(goodsInfos) !== "{}") {
            return (
                <i className="type_active">{goodsInfos.goodsName}*{goodsInfos.qty}</i>
            )
        } else {
            return (
                <i>请选择物品类型</i>
            )
        }
    }
}
export default GoodsInfos