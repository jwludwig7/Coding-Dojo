// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

let example1 = 222;
// expected true

let example2 = 322;
// expected false

let example3 = 443;
// expected false

let example4 = 454;
// expeected true

 var isPalindrome = function(x) {
    let temp = [];
    temp.push(x);
    
    console.log(temp)
    for (let i = temp.length - 1;i >= 0 ; i--){
        let bkw = []
        bkw.push(i)
        console.log(bkw)
    }


};

// console.log(isPalindrome(10));
console.log(isPalindrome(example1))
console.log(isPalindrome(example2))
console.log(isPalindrome(example3))
console.log(isPalindrome(example4))