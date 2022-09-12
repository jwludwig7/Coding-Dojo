/*1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
*/
function Print1To255() {
    for (let i = 1; i < 256; i++) {
        console.log(i);
    }
}
Print1To255()

/*2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
*/
function PrintOdds1To255() {
    for (let i = 1; i <256; i++) {
        if(i % 2===1){
            console.log(i)
        }
    }
}
PrintOdds1To255();

/*3. Print Ints and Sum 0-255
PrintIntsAndSum0To255()
Print integers from 0 to 255, and with each integer
print the sum so far.
*/
function PrintIntsAndSum0To255() {
    let sum = 0;
    for(let i = 0; i < 256; i++) {
        console.log(i);
        sum += i
    }
    console.log(sum);
}
PrintIntsAndSum0To255();

/*4. Iterate and Print Array
Iterate through a given array, printing each value.
PrintArrayVals(arr)
*/
let arr1 = [1,2,3,4];
function PrintArrayVals(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
PrintArrayVals(arr1)

/*5. Find and Print Max
PrintMaxOfArray(arr)
Given an array, find and print its largest element.
*/
let arr2 = [1,40,5,7,8]
function PrintMaxOfArray(arr) {
    let max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];;
        }
    }
    console.log(max);
}
PrintMaxOfArray(arr2);

/*6. Get and Print Average
PrintAverageOfArray(arr)
Analyze an array’s values and print the average.
*/
let arr3 = [50,52];
function PrintAverageOfArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
PrintAverageOfArray(arr3);

/*7. Array with Odds
ReturnOddsArray1To255()
Create an array with all the odd integers between 1
and 255 (inclusive).
*/

function ReturnOddsArray1To255() {
    let array = [];
    for(let i = 1; i < 256; i++) {
        if(i % 2 !==0) {
            array.push(i);
        }
    }
    return array;
}
output7 = ReturnOddsArray1To255();
console.log(output7);

/*8. Square the Values
SquareArrayVals(arr)
Square each value in a given array, returning that
same array with changed values.
*/
let arr4 = [2,2,3,4,5]
function SquareArrayVals(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
output8 = SquareArrayVals(arr4)
console.log(output8);

/*9. Greater than Y
ReturnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the
number of array values greater than Y.
*/
let arr5 = [1,23,3,4,6,7];
function ReturnArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
output9 = ReturnArrayCountGreaterThanY(arr5, 5);
console.log(output9);

/*10. Zero Out Negative Numbers
ZeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative
values to zero.
*/
let arr6 = [-1,2,3,-4,-5,6,-7];
function ZeroOutArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr;
}
output10 = ZeroOutArrayNegativeVals(arr6);
console.log(output10);

/*11. Max, Min, Average
PrintMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average
values for that array.
*/
let arr7 = [2,3,6,7,8,9]
function PrintMaxMinAverageArrayVals(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum +=arr[i];
    }
    let avg = sum / arr.length;
    let arrnew = [max, min, avg];
    console.log(arrnew);

}
PrintMaxMinAverageArrayVals(arr7);


/*12. Shift Array Values
ShiftArrayValsLeft(arr)
Given an array, move all values forward (to the left)
by one index, dropping the first value and leaving a 0
(zero) value at the end of the array.
*/
let arr8 = [1,2,3]
function ShiftArrayValsLeft(arr) {
   arr.shift();
   arr.push(0);
   
    console.log(arr);
}

ShiftArrayValsLeft(arr8);


/*13. Swap String For Array Negative Values
SwapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative
values with the string 'Dojo'.
*/
let arr9 = [-1, 2, -3, 4]
function SwapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
output13 = SwapStringForArrayNegativeVals(arr9);
console.log(output13);









