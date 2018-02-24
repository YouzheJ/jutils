var getType = require('./getType');

function isFunction (value) {
  return getType(value) === 'Function';
}

module.exports = isFunction;