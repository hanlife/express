import {fetch} from './index'
// const COURIER = '/cyy-app/courier/';
const TX = '/';

export default {
    /**
     * 用户登录
     */
    test(params) {
        return fetch(TX + 'test', params)
    }
}