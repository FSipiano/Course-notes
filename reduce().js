//longer function
let numbers1 = [1, 2, 3, 4, 5] 
function reducer1(acc, curVal)
{
   return acc + curVal
}

//console.log(numbers1.reduce(reducer1))

//shorter, .reduce() method

let numbers = [1,2,3,4,5]
let reducer = (accumulator,currentValue) => accumulator + currentValue 
//find largest number in array
let largest = Math.max.apply(this.numbers) 

console.log(numbers.reduce(reducer))

//console.log(largest)


let ingredients = ['patty', 'cheese', 'tomato', 'buns', 'ketchup', 'gherkins']

let bigBurger = ingredients.map(function(bigger){
    return bigger.toUpperCase()
})
let reducer = ()

//console.log(bigBurger)

   