//in progress
function palindrome (str){
var noCharacters = /\W/g
var lowCaseReplace= palindrome.toLowerCase().replace(noCharacters, '')
var reverseStr = lowCaseReplace.split('').reverse().join;('')
return reverseStr === lowCaseReplace
}

palindrome('racecar')
