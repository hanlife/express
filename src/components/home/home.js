import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import '../../style/home.css'
import home_J from '../../images/img-home-j.png'
import home_m from '../../images/img-home-m.png'

class Home extends Component {
    componentDidMount() {
        // api     .test({name: 'dasdad'})     .then(res => {         console.log(res)
        // })
    }
    render() {
        return (
            <div id="reactContainer">
                <div className="home_box">
                    <Link to="/deliveryInfo">
                        <img src={home_J} alt="" className="img-mrg"/>
                    </Link>
                    <Link to="/order/dlj">
                        <img src={home_m} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Home