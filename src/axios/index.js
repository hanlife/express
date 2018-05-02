import axios from 'axios'
import qs from 'qs'
import * as config from './config'
import {showAlert} from '../utils/index'


// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = config.BASE_URL

//POST传参序列化
axios
    .interceptors
    .request
    .use((config) => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    }, (error) => {
        showAlert("参数错误")
        return Promise.reject(error);
    });

//返回状态判断
axios
    .interceptors
    .response
    .use((res) => {
        // if (!res.data.success) {     alert(res.data.msg);     return
        // Promise.reject(res); } return res;
        // console.log("222",res)
        return res;
    }, (error) => {
        showAlert("网络异常");
        return Promise.reject(error);
    });

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

