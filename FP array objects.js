var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
]
//works, but long
var sunnyDays = []

for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun ){
        sunnyDays.push(forecast[i])
    }
}
//.filter method
var sunnyDays1 = forecast.filter(function(weather){
    return forecast.sun
})

console.log(sunnyDays1)