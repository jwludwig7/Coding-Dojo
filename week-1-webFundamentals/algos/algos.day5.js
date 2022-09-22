let arr = ["a", "b", "c", "d", "e"];

function reverse(arr) {
    let arr2 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let poppedval = arr.pop();   
        arr2.push(poppedval);
    }
    
    return arr2;    
}
output = reverse(arr);
console.log(output);