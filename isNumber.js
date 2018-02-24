var getType = require('./getType');

function isNumber (value) {
  return getType(value) === 'Number';
}

module.exports = isNumber;