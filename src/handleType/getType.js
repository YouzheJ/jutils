/**
 * 获取变量的类型，首字母大写
 * @param {*} value 
 */
function getType (value) {
  return Object.prototype.toString.call(value).replace(/\[object\s|(\]$)/g, '');
}
module.exports = getType;