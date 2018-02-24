var getType = require('./getType');

function isNull (value) {
  return getType(value) === 'Null';
}

module.exports = isNull;