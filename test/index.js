import JU from '../src';

// string
// getLengthCN
const stringTest = '中文en';
console.log('getLengthCN test ' + stringTest + ' length should be 6 is ' + (JU.getLengthCN(stringTest) === 6));