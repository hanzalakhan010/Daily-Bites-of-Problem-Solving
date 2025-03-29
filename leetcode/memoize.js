// function memoize(fn) {
//   let res = new Map();

//   return function (...args) {
//     result = res.get(args.join(","));
//     if (result) return result;
//     else {
//       let value = fn(...args);
//       res.set(args.join(","), value);
//       return value;
//     }
//   };
// }

function memoize(fn) {
  let res = {};

  return function (...args) {
    argsToString = args.join("-");
    result = res[argsToString];
    if (result!==undefined) return result;
    else {
      let value = fn(...args);
      res[argsToString] = value;
      return value;
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(0, 0)); // 5
console.log(memoizedFn(0, 0)); // 5
console.log(callCount); // 1

// console.log([0, 0].join(","));
