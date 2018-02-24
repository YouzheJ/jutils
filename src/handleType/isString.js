var getType = require('./getType');

function isString (value) {
  return getType(value) === 'String';
}

module.exports = isString;