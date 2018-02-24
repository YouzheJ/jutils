var getType = require('./getType');

function isArray (value) {
  return getType(value) === 'Array';
}

module.exports = isArray;