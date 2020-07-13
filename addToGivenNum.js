var summation = function (num) {
  if (num == 0){
    return 0
  }
  
  var runningTotal = 1
for (i=2;i<=num;i++){
 runningTotal += i
}
  return runningTotal
  }

  console.log(summation(8))