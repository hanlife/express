import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {PullToRefresh, ListView} from 'antd-mobile'

import OrderItem from '../orderItem'

// 模拟数据
const data = [
    {
        time: '下单时间 2018-03-16 12:30:30',
        jijian: '赵日天',
        delv: '赵日狗',
        fadi: '宝安区',
        shoudi: '罗湖区',
        orderId: 'wx124654654'
    }, {
        time: '下单时间 2018-03-17 12:30:30',
        jijian: '赵天',
        delv: '赵狗',
        fadi: '宝安区',
        shoudi: '罗湖区',
        orderId: 'wx1246243454654'
    }, {
        time: '下单时间 2018-03-16 12:30:30',
        jijian: '赵日天',
        delv: '赵日狗',
        fadi: '宝安区',
        shoudi: '罗湖区',
        orderId: 'wx124654654'
    }
]

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
        dataArr.push(`row - ${ (pIndex * NUM_ROWS) + i}`);
    }
    console.log(dataArr)
    return dataArr;
}

class dlj extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            data: [],
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
       const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(genData()),
                height: hei,
                refreshing: false,
                isLoading: false
            });
        }, 1500);
    }

    onRefresh = () => {
        this.setState({refreshing: true, isLoading: true});
        // simulate initial Ajax
        console.log("onRefresh")

    };
    onEndReached = (event) => {
        // load new data hasMore: from backend data, indicates whether it is the last
        // page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({isLoading: true});
    };
    render() {
        const separator = (sectionID, rowID) => (<div
            key={`${sectionID}-${rowID}`}
            style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED'
        }}/>);
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            console.log(obj)
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
                        padding: 30,
                        textAlign: 'center'
                    }}>
                        {this.state.isLoading
                            ? 'Loading...'
                            : 'Loaded'}
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