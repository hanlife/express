import React, {Component} from 'react'
import {
    List,
    InputItem,
    Button,
    WingBlank,
    WhiteSpace,
    Toast
} from 'antd-mobile';
import {CheckIDcard} from '../../axios/api'

class Idcard extends Component {
    state = {
        name: '',
        cardNumber: ''
    };
    componentDidMount() {
    }
    onChange = (key, value) => {
        this.setState({[key]: value});
    };
    submit() {
        let {name, cardNumber} = this.state
        if (name === '' || cardNumber === '') {
            Toast.info("姓名跟身份证号不能为空")
            return
        }
        CheckIDcard({name, cardNumber}).then(res => {
            if (res.messageModel.code === 0) {
                this
                    .props
                    .history
                    .push("/build/home");
            }else{
                Toast.fail(res.messageModel.messageText, 4);
            }
        })
    }
    render() {
        return (
            <div className=''>
                <WhiteSpace size="xl"/>
                <WingBlank>
                    <List renderHeader={() => '财悠悠认证'}>
                        <InputItem
                            clear
                            placeholder="请输入姓名"
                            ref={el => this.autoFocusInst = el}
                            onChange={v => {
                            this.onChange("name", v);
                        }}>姓名</InputItem>
                        <WhiteSpace size="sm"/>
                        <InputItem
                            clear
                            placeholder="请输入身份证号码"
                            ref={el => this.autoFocusInst = el}
                            onChange={v => {
                            this.onChange("cardNumber", v);
                        }}>身份证号码</InputItem>
                    </List>
                    <WhiteSpace size="lg"/>
                    <Button
                        type="primary"
                        disabled={this.state.hasError}
                        onClick={() => {
                        this.submit();
                    }}>
                        确认
                    </Button>
                </WingBlank>
                <WhiteSpace size="lg"/>
            </div>
        )
    }
}

export default Idcard