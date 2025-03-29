// var compose = function (functions) {
//   functions.reverse();
//   return function (x) {
//     resFunc = x;
//     functions.forEach((func) => {
//       resFunc = func(resFunc);
//     });
//     return resFunc;
//   };
// };
var compose = function (functions) {
  // functions.reverse()
  return function (x) {
    return functions.reduceRight((composite, current) => {
        return ()=> current(composite(x))
    }); //Composite Function
  };
};

let newFn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// console.log(newFn(4));
console.log(newFn(4)())
// console.log(newFn)
