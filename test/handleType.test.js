describe('handleType test', function () {
  it(`jutils.isNumber(${33}) should return true`, function () {
      assert(jutils.isNumber(33))
  });
  it(`jutils.isString(${'333'}) should return true`, function () {
      assert(jutils.isString('333'))
  });
  it(`jutils.isObject(${{a:33}}) should return true`, function () {
      assert(jutils.isObject({a:33}))
  });
  it(`jutils.isArray(${[33,44]}) should return true`, function () {
      assert(jutils.isArray([33,44]))
  });
  it(`jutils.isFunction(${function() {}}) should return true`, function () {
      assert(jutils.isFunction(function() {}))
  });
  it(`jutils.isNull(${null}) should return true`, function () {
      assert(jutils.isNull(null))
  });
  it(`jutils.isUndefined(${undefined}) should return true`, function () {
      assert(jutils.isUndefined(undefined))
  });
});