import React, {Component} from 'react'
import {Link} from "react-router-dom"

// tab导航默认配置
const TabList = [
    {
        path: '/build/order/dlj',
        name: '待揽件'
    }, {
        path: '/build/order/dfk',
        name: '待付款'
    }, {
        path: '/build/order/psz',
        name: '配送中'
    }, {
        path: '/build/order/yqs',
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
    componentWillMount() {
        let _t = this;
        TabList.forEach((v, i) => {
            if (v.path === window.location.pathname) {
                _t.setState({current: i})
            }
        });
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