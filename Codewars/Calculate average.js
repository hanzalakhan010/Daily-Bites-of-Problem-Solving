function findAverage(array) {
  sum = 0;
  for (let ele of array) {
    sum += ele;
  }
  if (array.length) {
    return sum / array.length;
  }
  return 0;
}

console.log(findAverage([]));
