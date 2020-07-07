/* let stringA = 'Ford'


for (i = 0; i < stringA.length; i++) {
    return stringA.indexOf([i])
} */

// let character = stringA [i] 

// for (x=(i+1); (stringA.length -1); x++){
// }

// let character2 = string[x]

//     if(i==x){
//     return true
// }



let result = hasDuplicates("Hello")
console.log(result)

function hasDuplicates(myString) {
    
    for (let i = 0; i < myString.length; i++) {

        let char1 = myString[i]

        for (let x = i + 1; x < myString.length; x++) {

            let char2 = myString[x]

            if(char1 == char2) {
                console.log("Duplicate found: " + char1)
                return true
            }
        }
    }

    return false;
}