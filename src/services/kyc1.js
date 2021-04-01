import { get } from '@/utils/request';

/**
 * 提交 Email 请求
 * @param   {Object}  请求参数对象
 * @returns {Promise} 服务器响应结果
 */
export function submitEmail(params) {
  return get('/mocks/kyc1/submitEmail.json', params);
}

/**
 * 获取短信验证码请求
 * @returns {Promise} 服务器响应结果
 */
export function getVerificationCode() {
  return get('/mocks/kyc1/getVerificationCode.json');
}

/**
 * 提交 Mobile 请求
 * @param   {Object}  请求参数对象
 * @returns {Promise} 服务器响应结果
 */
export function submitMobile(params) {
  return get('/mocks/kyc1/submitMobile.json', params);
}
