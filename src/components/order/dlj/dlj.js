import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {PullToRefresh, ListView} from 'antd-mobile'
import {getOrderSendList} from '../../../axios/api'
import {connect} from "react-redux";
import {orderData} from "../../../reducer/orderLists.redux";

import OrderItem from '../orderItem'

const initParms = {
    currentPage: 1,
    pageSize: 5,
    order_state: "DLJ"
}

@connect(state => state.orderLists, {orderData})
class dlj extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            data: [],
            hasMore: true,
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false
        };
    }
    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM
            .findDOMNode(this.lv)
            .offsetTop;
        this.setState({height: hei});
        initParms.phone = localStorage.getItem("phone")
        this.Ajax(initParms)
    }
    FormatList(list) {
        return list.map(v => {
            v.goodsInfos = JSON.parse(v.goodsInfos)
            v.receiverAddr = JSON.parse(v.receiverAddr)
            v.senderAddr = JSON.parse(v.senderAddr)
            return v
        })
    }
    Ajax(parms) {
        getOrderSendList(parms).then(res => {
            if (res.messageModel.code === 0) {
                let items = this.FormatList(res.rows)
                let hasMore = items.length > 0
                    ? true
                    : false
                let totleList
                if (parms.currentPage !== 1) {
                    totleList = this
                        .state
                        .data
                        .concat(items)
                } else {
                    totleList = items
                }
                this.setState({
                    data: totleList,
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(totleList),
                    refreshing: false,
                    isLoading: false,
                    hasMore: hasMore
                });
                this
                    .props
                    .orderData(totleList)
            }
        })
    }
    onRefresh = () => {
        this.setState({refreshing: true, isLoading: true});
        // simulate initial Ajax
        initParms.currentPage = 1
        this.Ajax(initParms)

    };
    onEndReached = (event) => {
        // load new data hasMore: from backend data, indicates whether it is the last
        // page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({isLoading: true});
        initParms.currentPage++;
        this.Ajax(initParms)
    };
    render() {
        const {data} = this.state
        const separator = (sectionID, rowID) => (<div key={`${sectionID}-${rowID}`} style={{
            height: 12
        }}/>);
        let index = this.state.data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (<OrderItem data={obj} key={index}/>);
        };

        return (
            <div className='dlj_box'>
                <ListView
                    key={this.state.useBodyScroll
                    ? '0'
                    : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (
                    <div
                        style={{
                        padding: 15,
                        textAlign: 'center',
                        color: '#ffffff'
                    }}>
                        {this.state.isLoading
                            ? 'Loading...'
                            : '全部加载'}
                    </div>
                )}
                    renderRow={row}
                    renderSeparator={separator}
                    useBodyScroll={this.state.useBodyScroll}
                    style={this.state.useBodyScroll
                    ? {}
                    : {
                        height: this.state.height,
                        border: '1px solid #ddd',
                        margin: '5px 0'
                    }}
                    pullToRefresh={< PullToRefresh refreshing = {
                    this.state.refreshing
                }
                onRefresh = {
                    this.onRefresh
                } />}
                    onEndReached={this.onEndReached}
                    pageSize={5}></ListView>
            </div>
        )
    }
}
export default dlj