import React, {Component} from 'react'

class Insurance extends Component {
    render() {
        let insuranceFlag = this.props.insuranceFlag
        let insuranceFlag_Srt
        switch (insuranceFlag) {
            case 0:
                insuranceFlag_Srt = "不保值"
                break;
            case 1:
                insuranceFlag_Srt = "保值"
                break;
            default:
                insuranceFlag_Srt = ""
                break;
        }
        if (insuranceFlag_Srt !== '') {
            return (
                <i className="type_active">{insuranceFlag_Srt}</i>
            )
        } else {
            return (
                <i>请选择增值服务</i>
            )
        }
    }
}
export default Insurance