import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './components/home/home'
import deliveryInfo from './containers/deliveryInfo/deliveryInfo'
import WritePage from './components/writePage/writePage'
import order from './components/order/order'

import courier from './components/orderDetail/courier'
import dfkDetail from './components/orderDetail/dfkDetail'
import dljDetail from './components/orderDetail/dljDetail'
import payDetail from './components/orderDetail/payDetail'

import page404 from './components/errorPage/page404'

const newHistory = createBrowserHistory()

class CRouter extends Component {

    render() {
        return (
            <Router history={newHistory}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/deliveryInfo" component={deliveryInfo}/>
                    <Route path="/writePage/:type" component={WritePage}/>
                    <Route path='/order' component={order}></Route>
                    <Route path='/courier/:orderId' component={courier}></Route>
                    <Route path='/dfkDetail/:orderId' component={dfkDetail}></Route>
                    <Route path='/dljDetail/:orderId' component={dljDetail}></Route>
                    <Route path='/payDetail/:orderId' component={payDetail}></Route>
                    <Route path="/404" component={page404}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </Router>
        )
    }
}

export default CRouter