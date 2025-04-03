function moveZeros(arr) {
  newArr = [];
  lastArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      lastArr.push(0);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr.concat(lastArr);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
