// Vowel Count with reduce

let word = "hanzala khan is here";

let alpha = word.split("");

let vowelsCount = alpha.reduce((acc, ele) => {
  if (["a", "e", "i", "o", "u"].includes(ele)) {
    return (acc += ele);
  } else {
    return acc;
  }
}, "");

// console.log(vowelsCount.length);

// Vowel frequency Counter
let vowelsFreq = alpha.reduce((acc, ele) => {
  if (["a", "e", "i", "o", "u"].includes(ele)) {
    if (acc) {
      if (acc[ele]) {
        acc[ele] += 1;
      } else {
        acc[ele] = 1;
      }
      return acc;
    }
  } else {
    return acc;
  }
}, {});
console.log(vowelsFreq);
