var isObject = require('../handleType/isObject');

/**
 * 判断是否为空对象
 * @param {*} value 
 */
function isEmptyObj (value) {
  if (!isObject(value)) return false;
  for (var key in value) {
    return false;
  }
  return true;
}

module.exports = isEmptyObj;