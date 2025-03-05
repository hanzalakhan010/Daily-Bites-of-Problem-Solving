function isIsogram(str){
    //...
    if (!str){return true}
    let alpha = []
    let str1 = str.toLowerCase().split("")
    for (let ele of str1){
        if (alpha.includes(ele)){
            return false
        }
        alpha.push(ele)
    }
    return true
  }
console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('moOse'))