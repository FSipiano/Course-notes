console.log('test')

let result = isSquare(9)

function isSquare(value) {

    if (value < 0) {
        console.log('Negative numbers cannot be square numbers')
    } else {
        var sqrt = Math.sqrt(value)

        if ((sqrt - Math.floor(sqrt)) !== 0) {
            console.log(value + ' is not a square number ' + '(' + value + '*' + value + ')')
        } else {
            console.log(value + ' is a square number' + '(' + value + '*' + value + ')')
        }
    }
}