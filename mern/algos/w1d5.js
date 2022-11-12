function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// import {partition} from "./w1d4.mjs"

// /* 
//   Visualization:
//   https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
//   Create a function that uses yesterday’s partition to fully sort an array
//   in-place.
//   Unstable sort.
  
//   Time Complexity
//     - Best: O(n log(n)) linearithmic.
//     - Average: O(n log(n)) linearithmic.
//     - Worst: O(n^2) quadratic.
  
//   Space: O(1) constant.
//   Params: nums, left, right
//   - left and right are indexes, for now, left will be 0, and right will be the
//       last idx.
//   - later these params will be used to specify a sub section of the array to
//       partition.
//   Steps:
//     - start by partitioning the full array
//         (use the previously built partition algo).
//     - then partition the left side of the array
//         (left of the returned partition idx) and the right side
//         (right of the returned partition idx), recursively.
// */

// const nums1 = [11, 8, 14, 3, 6, 2, 7];
// const expected1 = [2, 3, 6, 7, 8, 11, 14];

// const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

// const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

// const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

// /**
//  * Recursively sorts the given array in-place by mutating the array.
//  * Best: O(n log(n)) linearithmic.
//  * Average: O(n log(n)) linearithmic.
//  * Worst: O(n^2) quadratic.
//  * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
//  *    visualization.
//  * @param {Array<number>} nums
//  * @param {number} left The index indicating the start of the slice of the
//  *    given array being processed.
//  * @param {number} right The index indicating the end of the slice of the
//  *    given array being processed.
//  * @returns {Array<number>} The given array after being sorted.
//  */
// function quickSort(nums = [], left = 0, right = nums.length - 1) {}


// let testArr = [22,444566,5,77,8,44,5,54,44566,46];
// console.log("piviot =", testArr[Math.floor((testArr.length -1)/2)]);
// partition(testArr);
// console.log(testArr);