var reduce = function(nums, fn, init) {
  let total = init
  nums.forEach(element => {
    total=fn(total,element)
  });  
  return total
};

console.log(reduce([1,2,3],(acc,curr)=>acc+curr,0))