import { fetch } from "./index";
const COURIER = '/cyy-app/courier/';
const TX = "/";

/**
 * 用户登录
 */
export function test(params) {
  return fetch(TX + "test", params);
}
// 地址拆分 获取地址
export function getAddress(params) {
  return fetch(COURIER+'getAddress',params)
}

// http://192.168.5.39:8080/cyy-app/courier/getSalesmanByPhone?phone=15821656180
// 判断用户是否是专家
export function CheckSalesman(params) {
  return fetch(COURIER+'/getSalesmanByPhone',params)
}