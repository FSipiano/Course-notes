// var forcast = [
//     {day:'Monday', sun: false, humidity: 10},
//     {day:'Tuesday', sun: false, humidity: 100}, 
//     {day:'Wednesday', sun: false, humidity:100}, 
//     {day:'Thursday', sun: true, humidity: 25},
//     {day: 'Friday', sun: false, humidity: 100},
//     {day: 'Saturday', sun: true, humidity: 15}, 
//     {day: 'Sunday', sun: false, humidity: 100} 
// ]



// var humid = []
// for (var i = 0; i < forecast.length; i++){
//     humid.push(forecast[i].humidity)
// }
// //.map

// var humid = forecast.map(function(wetness) {
//     return wetness.humidity
// })

// add one to each number in array and then * each by 2
var numbers = [1,2,3,4]

var plusOne = numbers.map(function(mult) {
    return mult + 1
}).map(function(mult){
    return mult * 2
})

//console.log(plusOne)

var greeting = ['hi', 'hello', 'hey', 'thanks']

var shout = greeting.map(function(toUp){
    return toUp.toUpperCase()
})

console.log(shout)

