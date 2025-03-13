function abbrevName(name){

    // code away
    tokens = name.split(" ")
    console.log(tokens)
    return `${tokens[0].substring(0,1).toUpperCase()}.${tokens[1].substring(0,1).toUpperCase()}`

}
console.log(abbrevName('Sam Harris'))