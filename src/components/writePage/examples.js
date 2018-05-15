import React, {Component} from 'react'

import layer from '../../images/img-tip-layer.png'

class Examples extends Component {
    render() {
        return (
                <div className='examples_box' style={{display:this.props.showTip?"block":"none"}}>
                    <div className="example_bg"></div>
                    <div className="img_box" onClick={this.props.onhandleClose}>
                        <img src={layer} alt="" />
                    </div>
                </div>
            )

    }
}
export default Examples