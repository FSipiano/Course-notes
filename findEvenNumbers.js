//remove odd numbers from array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenArray = []

function findEvenNumbers(nums) {

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {

            evenArray.push(arr[i])
        }
    }
    return evenArray
}


console.log(findEvenNumbers(arr))