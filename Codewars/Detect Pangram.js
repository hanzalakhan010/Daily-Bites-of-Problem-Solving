function isPangram(string){
    string = string.toLowerCase().split('')
    console.log(string)
    for(let i = 65;i<91;i++){
        char = String.fromCharCode(i)
        if (!string.includes(char.toLowerCase())){
            return false
        }
    }
    return true
  }
console.log(isPangram('The quick brown fox jumps over the lazy dog'))