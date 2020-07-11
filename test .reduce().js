let array = [3, 6]
var doesThisWork = test(result)
console.log(doesThisWork)

function test(result) {
    return result.reduce(function (a, b) {
        return a + b
    }, 0)
}