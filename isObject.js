var getType = require('./getType');

function isObject (value) {
  return getType(value) === 'Object';
}

module.exports = isObject;