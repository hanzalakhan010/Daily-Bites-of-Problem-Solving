function disemvowel(str) {
    let pattern = /[aeiou]/gi
    str = str.replace(pattern,'')
    return str;
  }