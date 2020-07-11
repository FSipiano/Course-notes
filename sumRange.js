let range = [3, 6]

var result = sumRange(range)
var totalResult = finishThis(result)

console.log(result)
console.log(totalResult)

function sumRange(value) {

    total = Math.max(...value) - Math.min(...value)

    let firstNumber = value[0]

    for (i = 1; i < total; i++) {

        value.push(firstNumber + i)
    }
    return value.sort()

}
function finishThis(result) {
    return result.reduce(function(sum, current) {
            return sum + current}, 0)
        }
    
    
