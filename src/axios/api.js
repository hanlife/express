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

// 判断用户是否是专家
export function CheckSalesman(params) {
  return fetch(COURIER+'getSalesmanByPhone',params)
}

// 二元素实名认证
export function CheckIDcard(params) {
  return fetch(COURIER+'checkIDcard',params)
}

// 获取WX-SDK签名
export function GetWxsign(params) {
  return fetch('/cyy-app/wx/getAccessToken',params)
}

// 下单
export function uploaduserExpressInformation(params) {
  return fetch(COURIER+'uploaduserExpressInformation',params)
}
// 上传名片OCR
export function bcOcr(params) {
  return fetch(COURIER+'bcOcr',params)
}

// 获取订单列表
export function getOrderSendList(params) {
  return fetch(COURIER+'getOrderSendList',params)
}

// 取消订单
export function cancelOrder(params) {
  return fetch(COURIER+'cancelOrder',params)
}

// 支付订单
export function sendOrderPay(params) {
  return fetch(COURIER+'sendOrderPay',params)
}

// 物流详情
export function queryTraceInfo(params) {
  return fetch(COURIER+'queryTraceInfo',params)
}

// 订单信息
export function getSendInfo(params) {
  return fetch(COURIER+'getSendInfo',params)
}

