describe('object test', () => {
  it(`jutils.isEmptyObj(${{}}) should return true`, function () {
    assert(jutils.isEmptyObj({}))
  });

  it(`jutils.isEmptyObj(${33}) should return false`, function () {
    assert.notEqual(jutils.isEmptyObj(33))
  });

  it(`jutils.isEmptyObj(${{a: 3}}) should return false`, function () {
    assert.notEqual(jutils.isEmptyObj({a: 3}))
  });
});