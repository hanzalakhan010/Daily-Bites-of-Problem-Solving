function isEven(num) {
  return num % 2 == 0;
}
function sortArray(array) {
  if (array.length > 1) {
    first: for (let i = 0; i < array.length; i++) {
      lp = i;
      if (isEven(array[lp])) {
        continue first;
      }
      second: for (let j = 0; j < i; j++) {
        rp = j;
        // console.log(array[lp], array[rp]);
        if (isEven(array[rp])) {
          continue second;
        } else {
          if (array[lp] < array[rp]) {
            temp = array[lp];
            array[lp] = array[rp];
            array[rp] = temp;
          }
        }
      }
      console.log(array);
    }
  }
  return array;
}
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log([5, 3, 1, 8, 0])
// console.log(sortArray([5, 3, 1, 8, 0]));

console.log([5, 3, 2, 8, 1, 4]);
console.log(sortArray([5, 3, 2, 8, 1, 4]));
