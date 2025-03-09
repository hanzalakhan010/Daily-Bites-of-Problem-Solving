function reverseStr(str) {
  rev = "";
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

function countBits(n) {
  // Program Me
  let count = 0;
  let remainder = n;
  do {
    if (remainder % 2 == 0) {
      remainder /= 2;
    } else {
        remainder = Math.floor(remainder / 2);
    count += 1;
    }
  } while (remainder > 0);

  return count
}

console.log(countBits(4));
console.log(countBits(0));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
