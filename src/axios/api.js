import { fetch } from "./index";
// const COURIER = '/cyy-app/courier/';
const TX = "/";

/**
 * 用户登录
 */
export function test(params) {
  return fetch(TX + "test", params);
}
