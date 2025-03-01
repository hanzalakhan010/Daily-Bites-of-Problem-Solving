function maskify(cc) {
    mask  = ''
    if (cc.length>4){
        console.log(cc)
      mask+='#'.repeat(cc.length-4)
      mask+=cc.substring(cc.length-4)
      return mask
    }
    else{return cc}
  }

console.log(maskify('4556364607935616'))