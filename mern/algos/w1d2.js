
// Selection sort works by iterating through the list, finding the minimum
// value, and moving it to the beginning of the list. Then, ignoring the first
// position, which is now sorted, iterate through the list again to find the
// next minimum value and move it to index 1. This continues until all values
// are sorted.
// Unstable sort.

// Time Complexity
//   - Best: O(n^2) quadratic.
//   - Average: O(n^2) quadratic.
//   - Worst: O(n^2) quadratic.
// Space: O(1) constant.
// Selection sort is one of the slower sorts.
// - ideal for: pagination, where page 1 displays 10 records for example,
//     you run selection sort for 10 iterations only to display the first 10
//     sorted items.
// */

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
* Sorts given array in-place.
* Best: O(n^2) quadratic.
* Average: O(n^2) quadratic.
* Worst: O(n^2) quadratic.
* @param {Array<number>} nums
* @returns {Array<number>} The given array after being sorted.
*/
function selectionSort(arr) {
    let min;

    //start passes.
    for (let i = 0; i < arr.length; i++) {
        //index of the smallest element to be the ith element.
        min = i;

        //Check through the rest of the array for a lesser element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        //compare the indexes
        if (min !== i) {
            //swap
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
console.log(selectionSort(expected));




/* 
- Visualization with playing cards (scroll down):
    https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
- Array / bar visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
- Stable sort, efficient for small data sets or mostly sorted data sets.
Time Complexity
- Best: O(n) linear when array is already sorted.
- Average: O(n^2) quadratic.
- Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
- this sort splits the array into two portions (conceptually, not literally).
- the left portion will become sorted, the right portion
    (that hasn't been iterated over yet) is unsorted.
can shift OR swap target element until it reaches desired position
shifting steps:
1. consider the first item as sorted
2. move to the next item
3. store current item in a temp var (to make this position available to shift items)
4. if item to the left of current is greater than current item, shift the
    left item to the right.
5. repeat step 4 as many times as needed
6. insert current item
7. move to the next item and repeat
swap steps:
1. consider the first item as sorted
2. move to the next item
4. if item to left of current item is less than current, swap
5. repeat step 4 until item to left is less than current item
6. move to next item and repeat
*/

const numsOrdered1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
* Sorts the given array in-place.
* Best: O(n) linear when array is already sorted.
* Average: O(n^2) quadratic.
* Worst: O(n^2) quadratic when the array is reverse sorted.
* @param {Array<number>} nums
* @returns {Array<number>} The given array after being sorted.
*/
function insertionSort(arr) {
    //Start from the second element.
    for (let i = 1; i < arr.length; i++) {

        //Go through the elements behind it.
        for (let j = i - 1; j > -1; j--) {

            //value comparison using ascending order.
            if (arr[j + 1] < arr[j]) {

                //swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];

            }
        }
    };

    return arr;
}

console.log(insertionSort(numsOrdered1));
console.log(insertionSort(numsRandomOrder1));
console.log(insertionSort(numsReversed1));
console.log(insertionSort(expected1));
