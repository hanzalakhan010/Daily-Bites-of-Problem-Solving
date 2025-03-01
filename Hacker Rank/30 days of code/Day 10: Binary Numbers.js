n = 100

function reverseString(string) {
    let reversed = ''
    for (let chr of string) {
        reversed = chr + reversed
    }
    return reversed
}
function max(arr){
    let biggest = Number.NEGATIVE_INFINITY    
    
    for(let ele of arr){
        if (ele>biggest){
           biggest = ele 
        }
    }
    return biggest
}
function decToBinary(n) {
    let remainder = n
    let binary = ''
    while (remainder >= 1) {
        if (remainder % 2 === 0) {
            binary += '0'
            remainder /= 2
        }
        else if (remainder % 2 !== 0) {
            binary += '1'
            remainder = Math.floor(remainder / 2)
        }
    }
    return reverseString(binary)
}
function consecutiveSeq(string,chr){
    let arr = string.split(chr)
    let lengthArr = arr.map((ele) =>ele.length)
    return lengthArr
}

console.log(max(consecutiveSeq(decToBinary(6),0)))

// console.log(max([900,1,2,3,4,2,3,100]))
// console.log(consecutiveSeq(decToBinary(10),0))
// console.log(consecutiveSeq(decToBinary(128),0))
// console.log(consecutiveSeq(decToBinary(123),0))
// console.log(consecutiveSeq(decToBinary(10),0))
// console.log(consecutiveSeq(decToBinary(10),0))
// console.log(consecutiveSeq(decToBinary(10),0))
// console.log(decToBinary(12))
// console.log(decToBinary(20))
