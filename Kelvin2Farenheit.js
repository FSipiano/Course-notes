//Temperature in kelvin stored here
var kelvinTemp = 301;
// Temperature in celciusTemp 
var celciusTemp = kelvinTemp - 273.15;

var farenheitTemp = celciusTemp * (9/5) + 32;

//Round the vaule
farenheitTemp = Math.floor(farenheitTemp)

console.log('The temperature is ' + farenheitTemp + ' degrees Farenheit')