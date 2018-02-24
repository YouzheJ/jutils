describe('#getLengthCN()', function () {
  const stringTest = '中文en';
  it(`jutils.getLengthCN(${stringTest}) should return 6`, function () {
      assert(jutils.getLengthCN(stringTest) === 6)
  });
});