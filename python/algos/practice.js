// print 1 - 255
function print1to255(){
    let arr = []
    for(let i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}

console.log(print1to255());

// print sum 0-255

function sum0to255(){
    let sum = 0;
    for(let i = 0; i < 255; i++){
        sum += i
    }
    return sum;
}

console.log(sum0to255());

// find and print max

function printMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max
}

console.log(printMax([1,2,3,47,5,3,2]));

// array with odds

function odd1to255(){
    let odd = [];
    for(let i = 1; i < 256; i++){
        if (i % 2 != 0){
            odd.push(i);
        }
    }
    return odd;
}

console.log(odd1to255());

// greater than y 

function greaterthany(arr, y){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y) {
            count++;
        }
    }
    return count;
}

console.log(greaterthany([1,2,3,4,5,6], 2))

// max, min, avg

function maxMinAvg(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }

    let avg = sum / arr.length;
    let arrNew = [max,min, avg];
    return arrNew;
}
console.log(maxMinAvg([1,2,3,4,5]));

