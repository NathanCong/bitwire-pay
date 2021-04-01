import { get } from '@/utils/request';

/**
 * 获取省份列表
 * @returns {Promise} 服务器响应结果
 */
export function getProvinceList() {
  return get('/mocks/kyc2/provinceList.json');
}

/**
 * 提交数据接口
 * @param   {Object}  请求参数对象
 * @returns {Promise} 服务器响应结果
 */
export function submit(params) {
  return get('/mocks/kyc2/submit.json', params);
}
