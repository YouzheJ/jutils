var addZero = require('./addZero');
var getDay = require('./getDay');

/** 
 * 格式化当前时间
*/
function formatDate () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let min = date.getMinutes()
  let s = date.getSeconds()
  let day = date.getDay()
  return `${y}-${this.addZero(m)}-${this.addZero(d)} ` + 
  `${this.addZero(h)}:${this.addZero(min)}:${this.addZero(s)} ${this.getDay(day)}`;
}

module.exports = formatDate;