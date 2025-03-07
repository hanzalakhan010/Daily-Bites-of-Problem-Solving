// n = 5
// k = 2
n =9
k = 2
biggest = Number.NEGATIVE_INFINITY
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        andRes = j&i
        console.log(andRes,biggest)
        if ((andRes < k) && (andRes>biggest)){
            biggest = andRes

        }
    }
}
console.log(biggest)
// console.log(aAndB.sort().slice(-1)[0])