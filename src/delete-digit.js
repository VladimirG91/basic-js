const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  numArr = num.toString().split('')
  let item = ''
  if(numArr.includes('0')){
    item = '0'
    numArr.splice(numArr.indexOf(item), 1)
    return +numArr.join('')  
  }
  for(let i = 0; i < numArr.length; i++){
    if(numArr[i] < numArr[i+1]){
      item += numArr[i]
    }
  }
  numArr.splice(numArr.indexOf(item), 1)
  return +numArr.join('')  
}

module.exports = {
  deleteDigit
};
