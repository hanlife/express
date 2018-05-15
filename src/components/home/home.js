import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Toast} from "antd-mobile";

import '../../style/home.css'
import home_J from '../../images/img-home-j.png'
import home_m from '../../images/img-home-m.png'

class Home extends Component {
    componentDidMount() {}
    tip() {
        Toast.info("请在财悠悠APP里面查看我的快递！")
    }
    render() {
        return (
            <div id="reactContainer">
                <div className="home_box">
                    <Link to="/build/deliveryInfo">
                        <img src={home_J} alt="" className="img-mrg"/>
                    </Link>
                    {/* <img src={home_m} alt="" onClick={()=>{this.tip()}}/> */}
                    <Link to="/build/order/dlj">
                        <img src={home_m} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Home