import React, {Component} from 'react';
import {Link, Route, Redirect, Switch} from "react-router-dom"

import OrderList from "./orderList"

import dlj from './dlj/dlj'
import dfk from './dfk/dfk'
import yqs from './yqs/yqs'
import psz from './psz/psz'

class myExpress extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="myExpress_box">
                <Link to="/order/dlj">待揽件</Link>
                <Link to="/order/dfk">待付款</Link>
                <Link to="/order/yqs">已签收</Link>
                <Link to="/order/psz">配送中</Link>
                <OrderList>
                    <Switch>
                        <Route path="/order/dlj" component={dlj}/>
                        <Route path="/order/dfk" component={dfk}/>
                        <Route path="/order/yqs" component={yqs}/>
                        <Route path="/order/psz" component={psz}/>
                        <Redirect from='*' to='/order/dlj'/>
                    </Switch>
                </OrderList>
            </div>

        );
    }
}
export default myExpress