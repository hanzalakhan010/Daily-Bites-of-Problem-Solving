"use-strict"
function max(arr) {
    biggest = Number.NEGATIVE_INFINITY
    for (let ele of arr) {
        if (ele > biggest) {
            biggest = ele
        }
    }
    return biggest
}
function arraySum(array) {
    sumArr = []
    for (let arr of array) {
        sum = 0
        for (let num of arr) {
            sum += num
        }
        sumArr.push(sum)
    }
    return sumArr
}

// arr = [
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0]

// ]
// arr = [
//     [0, -4, -6, 0, -7, -6],
//     [-1, -2, -6, -8, -3, -1],
//     [-8, -4, -2, -8, -8, -6],
//     [-3, -1, -2, -5, -7, -4],
//     [-3, -5, -3, -6, -6, -6],
//     [-3, -6, 0, -8, -6, -7]
// ]
arr = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0],
]

function combine(arr){
    var chuncks = []
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newArr = []
            newArr.push(...arr[i].slice(j, j + 3))
            newArr.push(...arr[i + 1].slice(j + 1, j + 2))
            newArr.push(...arr[i + 2].slice(j, j + 3))
            chuncks.push(newArr)
        }
    }
    console.log(max(arraySum(chuncks)))

}
// console.log(chuncks)
console.log(sums)
// console.log(max(sums))
