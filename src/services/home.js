import { get } from '@/utils/request';

/**
 * 获取支付方式列表
 * @returns {Promise} 服务器响应结果
 */
export function getPaymentOptions() {
  return get('/mocks/home/paymentOptions.json');
}

/**
 * 获取钱包列表
 * @returns {Promise} 服务器响应结果
 */
export function getWalletList() {
  return get('/mocks/home/walletList.json');
}

/**
 * 获取银行列表
 * @returns {Promise} 服务器响应结果
 */
export function getBankList() {
  return get('/mocks/home/bankList.json');
}

/**
 * 提交银行卡信息
 * @returns {Promise} 服务器响应结果
 */
export function submitCard(params = {}) {
  return get('/mocks/home/submitCard.json', params);
}
