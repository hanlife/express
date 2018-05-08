import React, {Component} from 'react'
import {connect} from "react-redux";
import {Picker} from "antd-mobile";
import {createForm} from "rc-form";
import arrayTreeFilter from "array-tree-filter";
import Area from "../../utils/Area";

import {getArea} from "../../reducer/order.redux";

const chinaArea = Area[0].children[0].children;

@connect(state => state.orderInfo, {getArea})
class ChoseAreaS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classname:'address_name placeholder',
            data: [],
            // pickerValue: "选择省市区",
            visible: false,
            provinceName: "",
            cityName: "",
            countyName: "",
            address: ""
        };
    }
    onChange(v) {
        let Arr = []
        const value = v;
        if (!value || value.length === 0) {
            return "选择省市区";
        }
        const treeChildren = arrayTreeFilter(chinaArea, (c, level) => c.value === value[level]);
        Arr = treeChildren.map(v => v.label)
        // this.setState({pickerValue: Arr.join(","), provinceName: Arr[0], cityName: Arr[1], countyName: Arr[2]})
        this.props.getArea({provinceName:Arr[0],cityName: Arr[1], countyName: Arr[2],infoType:this.props.infoType})
        this.props.onHandChange({provinceName:Arr[0],cityName: Arr[1], countyName: Arr[2],pickerValue:Arr.join(",")})
    }
    render() {
        return (
            <Picker
                visible={this.state.visible}
                data={chinaArea}
                value={[]}
                onChange={v => {
                this.onChange(v)
            }}
                onOk={() => this.setState({visible: false})}
                onDismiss={() => this.setState({visible: false})}>
                <p onClick={() => this.setState({visible: true})}>
                    <span className="address_title">省市区:</span>
                    <span className={this.props.pickerValue==='选择省市区'?"placeholder":'address_name'}>{this.props.pickerValue}</span>
                    <span className="form_icon icon_address"/>
                </p>
            </Picker>
        )
    }
}
const ChoseArea = createForm()(ChoseAreaS);
export default ChoseArea