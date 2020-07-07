var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54]

// var goOutside = []

// for (var i = 0; i<weather.length; i++){
//     if (weather[i] > 70){
//        goOutside.push(weather[i])
//     }
// }
//console.log(goOutside)

var niceWeather = function(temp) {
    return temp > 70
}
var goOutsideFilter = weather.filter(niceWeather)

console.log(goOutsideFilter)