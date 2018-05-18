import React from 'react'
import Rate from './rate'
import {TextareaItem,Button} from 'antd-mobile';

import '../../style/evaluate.css'

class Evaluate extends React.Component {

    render() {
        return (
            <div className="evaluate_box">
                <div className="evaluate_item">
                <TextareaItem placeholder="尽情抒发情感吧···" rows={6}  clear/>
                </div>
                <div className="evaluate_item">
                    <div className="eva_titel"><span className="icon-evaluate"></span><span>整体评价</span></div>
                    <div className="eva_lists">
                        <div className="eva_list_title">服务态度</div>
                        <div className="eva_rate"><Rate></Rate></div>
                    </div>
                    <div className="eva_lists">
                        <div className="eva_list_title">物流速度</div>
                        <div className="eva_rate"><Rate></Rate></div>
                    </div>
                    <div className="eva_lists">
                        <div className="eva_list_title">快递员</div>
                        <div className="eva_rate"><Rate></Rate></div>
                    </div>
                </div>
                <div className="eva_btn">
                    <Button style={{backgroundColor:"#e87019",height:'44px',borderRadius:'44px',color:'#fff'}}>发表评价</Button>
                </div>
            </div>
        )
    }
}

export default Evaluate