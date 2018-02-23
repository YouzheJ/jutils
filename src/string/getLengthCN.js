/**
 * 获取字符串长度，中文两个字符，英文一个字符
 * @param {string} str 
 */
export function getLengthCN (str) {
  return str.replace(/[\u4e00-\u9fa5]/g, '**').length;
}