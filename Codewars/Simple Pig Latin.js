function pigIt(str) {
    //Code here
    let string = ''
    for (let words of str.split(' ')) {
        let wordArr = words.split("")
        if (wordArr.length > 1){
            let newArr = [...wordArr.slice(1,),...wordArr.slice(0,1)]
            string+=newArr.join('')+'ay '
        }
        else{
            string+=wordArr.slice(0,1)
        }
    }
    return string.trimEnd()
}
console.log(pigIt('This is my string'))