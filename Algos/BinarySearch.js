// function binSearch(arr, item, start, end, lastPivot) {
//     if (!start) start = 0
//     if (!end) end = arr.length - 1
//     pivot = Math.floor((start + end) / 2)
//     console.log(`start = ${start},end = ${end},pivot = ${pivot}`)
//     if (pivot > 0) {
//         if (pivot == Math.ceil((start + end) / 2)) return arr.length

//         if (item > arr[pivot]) {
//             binSearch(arr, item, start = pivot, end = arr.length - 1, pivot)
//         }
//         else if (item < arr[pivot]) {
//             binSearch(arr, item, start = 0, end = pivot, pivot)

//         }
//         return pivot
//     }
//     else{
//         return 0
//     }

// }

// console.log(binSearch([2, 3, 4, 5, 6, 10], -111))



function binSearch(nums, target, start, end) {
    if (!start) start = 0
    if (!end) end = nums.length
    max = Math.ceil(Math.log2(nums.length))
    for (let i = 0; i <= max; i++) {
        pivot = Math.floor((start + end) / 2)
        console.log(start, end, pivot)
        if (nums[pivot] == target) return pivot
        else if (nums[pivot] > target) {
            end = pivot
        }
        else if (nums[pivot] < target) {
            start = pivot
        }
    }
    if (nums[pivot] > target) {
        if (pivot > 0) {
            return pivot - 1
        }
        else { return pivot }
    }
    else {
        return pivot + 1
    }

}
// console.log(binSearch([2, 3, 4, 5, 6, 10, 100], 4.5))
console.log(binSearch([1, 3, 5, 6], 0))