function arrayDiff(a, b) {
    for(let ele of b){
        while(a.includes(ele)){
            a.splice(a.indexOf(ele),1)
        }
    }
    return a
}
console.log(arrayDiff([1,2,2], [1]))

// Some clever codes for others
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }