/**
 * 补零
 * @param {int} num
 * @param {?int} power 幂默认为1, 即补零后数字长度，最大值为10
 * return string
 */
var POW_MAX = 10;
function addZero (num, power = 1) {
  var max = Math.pow(10, power);
  if (power <= POW_MAX) {
    return num < max ? (max + num + '').substr(1) : num + ''
  } else {
    console.warn('function addZero: power must less than ' + max);
    return num + '';
  }
}

module.exports = addZero;