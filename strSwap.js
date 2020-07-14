const strMain = 'Bob Bobbins'

function strSwap(str) {

  let splitStr = str.split(' ').reverse().join(' ')
  return splitStr
}
console.log(strSwap(strMain))