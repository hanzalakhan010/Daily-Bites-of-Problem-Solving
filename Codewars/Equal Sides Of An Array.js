"use strict"
var arr = [1,2,3,4,3,2,1]

function arrSum(array){
    let sum = 0
    for (let ele of array){
        sum +=ele
    }
    return sum
}

function findEvenIndex(arr)
{
  //Code goes here!
  for(let i = 0;i<arr.length;i++){
    let sum1 = arrSum(arr.slice(0,i))
    let sum2 = arrSum(arr.slice(i+1,))
    if (sum1 == sum2){
        return i
    }
  }
  return -1
}

findEvenIndex(arr)