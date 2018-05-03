import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom"

import OrderList from "./orderList"
import TabItem from './navTab/tabItem'

import dlj from './dlj/dlj'
import dfk from './dfk/dfk'
import yqs from './yqs/yqs'
import psz from './psz/psz'

import '../../style/order.css'

class myExpress extends Component {

    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="myExpress_box">
                <TabItem/>
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