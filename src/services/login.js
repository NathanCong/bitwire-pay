import { get } from '@/utils/request';

/**
 * 登录接口
 * @param   {Object}  请求参数对象
 * @returns {Promise} 服务器响应结果
 */
/* eslint-disable import/prefer-default-export */
export function login(params) {
  return get('/mocks/login.json', params);
}
