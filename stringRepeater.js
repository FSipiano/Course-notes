function repeater(str, num){
  var finalString = ''
    if (num <= 0){
      return finalString
    }
for(var i=1; i<=num;i++){
  finalString += str
}
    return finalString
}
 
console.log(repeater('car', 4))