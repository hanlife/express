import React, {Component} from "react";
import {Router, Route, Switch, Redirect} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Login from "./components/login/login";
import Home from "./components/home/home";
import Idcard from './components/idCard/idCard'
import deliveryInfo from "./components/deliveryInfo/deliveryInfo";
import WritePage from "./components/writePage/writePage";
import order from "./components/order/order";

import courier from "./components/orderDetail/courier";
import dfkDetail from "./components/orderDetail/dfkDetail";
import dljDetail from "./components/orderDetail/dljDetail";
import payDetail from "./components/orderDetail/payDetail";

import Protocol from "./components/protocol/protocol"
import page404 from "./components/errorPage/page404";

const newHistory = createBrowserHistory();

class CRouter extends Component {
  render() {
    return (
      <Router history={newHistory}>
        <Switch>
          <Route path="/build" exact component={Login}/>
          <Route path="/build/Home" component={Home}/>
          <Route path="/build/Idcard" component={Idcard}/>
          <Route path="/build/deliveryInfo" component={deliveryInfo}/>
          <Route path="/build/writePage/:type" component={WritePage}/>
          <Route path="/build/order" component={order}/>
          <Route path="/build/courier/:orderId" component={courier}/>
          <Route path="/build/dfkDetail/:orderId" component={dfkDetail}/>
          <Route path="/build/dljDetail/:orderId" component={dljDetail}/>
          <Route path="/build/payDetail/:orderId" component={payDetail}/>
          <Route path="/build/protocol" component={Protocol}/>
          <Route path="/build/404" component={page404}/>
          <Redirect from="*" to="/build"/>
        </Switch>
      </Router>
    );
  }
}

export default CRouter;
