var getType = require('./getType');

function isUndefined (value) {
  return getType(value) === 'Undefined';
}

module.exports = isUndefined;