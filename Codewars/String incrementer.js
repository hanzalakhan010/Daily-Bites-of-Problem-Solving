function reverseStr(str) {
  let rev = "";
  for (let chr of str) {
    rev = chr + rev;
  }
  return rev;
}

function numFormatter(num) {
  let num_1 = Number(num) + 1;
  zeros = num.length - num_1.toString().length;
  if (zeros>=1){
      return `${"0".repeat(zeros)}${num_1}`;
  }
  return String(num_1);

}

function incrementString(string) {
  // return incrementedString
  str1 = reverseStr(string);
  num = reverseStr(parseInt(str1).toString());
  if (!isNaN(num)) {
    return `${string.substr(0, string.length - num.length)}${numFormatter(num)}`
  } else {
    return `${string}1`;
  }
}

// console.log(incrementString("foobar00999"))
console.log(incrementString("foo"))

// 00999 - 01000
// 999+1 =  1000
// foobar01000
// console.log(numFormatter("00999"));
