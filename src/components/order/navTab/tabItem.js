import React, {Component} from 'react'
import {Link} from "react-router-dom"

// tab导航默认配置
const TabList = [
    {
        path: '/order/dlj',
        name: '待揽件'
    }, {
        path: '/order/dfk',
        name: '待付款'
    }, {
        path: '/order/psz',
        name: '配送中'
    }, {
        path: '/order/yqs',
        name: '已签收'
    }
]

class TabItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    itemNav = (index) => {
        return index === this.state.current
            ? "tab_item tab_active"
            : 'tab_item';
    }
    render() {
        return (
            <div className='tabNav'>
                {TabList.map((v, i) => {
                    return (
                        <div
                            key={i}
                            className={this.itemNav(i)}
                            onClick={() => {
                            this.setState({current: i})
                        }}>
                            <Link to={v.path}>{v.name}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TabItem