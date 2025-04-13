let rotateArr = (arr) => {
  return arr.reverse().map((ele) => ele.reverse());
};

let snail = function (array) {
  // enjoy
  resArr = [];

  while (array.length >= 1) {
    resArr.push(...array[0]);
    resArr.push(
      ...array
        .map((ele) => ele.slice(-1)[0])
        .flat()
        .slice(1)
    );
    array = rotateArr(array.slice(1).map((ele) => ele.slice(0, -1)));
  }
  return resArr
};

//   console.log(rotateArr([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ]))
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(snail([]))
// Array().fla
