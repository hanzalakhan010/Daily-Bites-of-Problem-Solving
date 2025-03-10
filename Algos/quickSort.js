arr = [1, 2, 3, 4, 2, 1, 4, 3, 5, 3, 9];

function quickSort(arr) {
  let left = [];
  let right = [];
  let eqArr = [];
  let pivot = arr[Math.floor(arr.length / 2)];
  console.log(pivot)
  if (arr.length>1) {
    for (let ele of arr) {
        console.log(ele)
      if (ele < pivot) {
        left.push(ele);
      } else if (ele > pivot) {
        right.push(ele);
      } else {
        eqArr.push(ele);
      }
    }
    return [...quickSort(left), ...eqArr, ...quickSort(right)];
  } else {
    return arr;
  }
}

console.log(quickSort(arr));
