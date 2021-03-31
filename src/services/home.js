import { get } from '@/utils/request';

/**
 * 获取支付方式列表
 * @returns {Promise} 服务器响应结果
 */
/* eslint-disable import/prefer-default-export */
export function getPaymentOptions() {
  return get('/mocks/home/paymentOptions.json');
}
