import Axios from 'axios';

/**
 * 全局 URL 设置
 */
Axios.defaults.baseURL = '/';

/**
 * Get 请求
 * @param {String} url    请求地址
 * @param {Object} params 请求参数
 * @returns {Promise}     响应结果
 */
export function get(url, params) {
  return Axios.get(url, { params });
}

/**
 * Post 请求
 * @param {String} url    请求地址
 * @param {Object} params 请求参数
 * @returns {Promise}     响应结果
 */
export function post(url, params) {
  return Axios.post(url, params);
}
