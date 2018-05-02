import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './components/view/home'
import deliveryInfo from './components/deliveryInfo/deliverInfo'
import myExpress from './components/myExpress/myExpress'
import writePage from './components/writePage/writePage'
import page404 from './components/errorPage/page404'


const newHistory = createBrowserHistory()

class CRouter extends Component {

    render() {
        return (
            <Router history={newHistory}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/deliveryInfo" component={deliveryInfo}/>
                    <Route path="/myExpress" component={myExpress}/>
                    <Route path="/writePage/:type" component={writePage}/>
                    <Route path="/404" component={page404}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </Router>
        )
    }
}

export default CRouter