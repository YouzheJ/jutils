var getLengthCN = require('./string/getLengthCN');

var getType = require('./handleType/getType');
var isNumber = require('./handleType/isNumber');
var isString = require('./handleType/isString');
var isObject = require('./handleType/isObject');
var isArray = require('./handleType/isArray');
var isFunction = require('./handleType/isFunction');
var isNull = require('./handleType/isNull');
var isUndefined = require('./handleType/isUndefined');

var isEmptyObj = require('./Object/isEmptyObj');

module.exports = {
  getLengthCN,

  getType,
  isNumber,
  isString,
  isObject,
  isArray,
  isFunction,
  isNull,
  isUndefined,

  isEmptyObj,
}