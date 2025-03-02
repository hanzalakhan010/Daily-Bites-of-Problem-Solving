"use-strict"

function sum(arr) {
    let sum_ = 0
    for (let ele of arr) {
        sum_ += Number(ele)
    }
    return sum_
}

function digitalRoot(n) {
    let num = n.toString()
    do {
        num = num.split('')
        num = sum(num)
        num = num.toString()
    }
    while (num.length > 1)
    return Number(num)
}
console.log(digitalRoot(456))
