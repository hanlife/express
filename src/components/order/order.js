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
    componentWillUnmount() {
        document.getElementsByTagName('body')[0].style.overflow = 'initial'
    }

    render() {
        return (
            <div className="myExpress_box">
                <TabItem/>
                <OrderList>
                    <Switch>
                        <Route path="/build/order/dlj" component={dlj}/>
                        <Route path="/build/order/dfk" component={dfk}/>
                        <Route path="/build/order/yqs" component={yqs}/>
                        <Route path="/build/order/psz" component={psz}/>
                        <Redirect from='*' to='/build/order/dlj'/>
                    </Switch>
                </OrderList>
            </div>

        );
    }
}
export default myExpress