//#simple while loop - creates numbers 0-9#

//var score = 0
//while (score < 10){
//   console.log(score)
//score++
// }

//#Do/while - runs once#

// var value = 5
// do {
//     console.log(value);
//     value++;
// }  while (value < 3)

//#for loops#

// for (var i = 0; i<10; i++){
//     console.log ('My favourite number is ' + i + '!')
// }

//#for loops in arrays# - i should, strictly be declared but it has been made into a global variable now

// var zooNames =['lion', 'tiger', 'bear'];
// var arrayLength = zooNames.length;

// for (i= 0; i < arrayLength; i++){
//     console.log('My favourite zoo animal is the ' + zooNames[i]+ '!')
// }

//##review##
//##run a while loop to run 5x##

// var counter = 0
// while (counter <= 4){
//     counter++
//     console.log(counter)
// }

// ##challenge##
// ##create a do/while that runs once with a false expression

// var count = 0
// do{
//     console.log(count)
// }
// while (count > 0)

//##challenge - for loops##
//##create 5 array of number values##
//##loop through an array with a for loop##
//##run each element of the array through an if, else, else if clause


var testScores = [70, 80, 90, 47, 98]
var arrayLength = testScores.length

for (i = 0; i < arrayLength; i++) {

    if (testScores[i] >= 90) {
        console.log('You passed - A')
    }
    else if (testScores[i] >= 70) {
        console.log('You passed - C')
    }
    else if (testScores[i] >= 50) {
        console.log('You passed - D')
    } else {
        console.log('You failed')
    }
}