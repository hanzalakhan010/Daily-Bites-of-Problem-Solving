var filter = function (arr, fn) {
  let resArr = [];
  arr.forEach((ele,index) => {
    if (fn(ele,index)) {
      resArr.push(ele);
    }
  });
  return resArr
};
