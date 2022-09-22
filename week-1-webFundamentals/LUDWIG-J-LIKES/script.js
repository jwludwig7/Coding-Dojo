let count = 0;
let countElement = document.querySelector("#count");

console.log(countElement);

function liked1() {
    count++;
    countElement.innerText = count + "-Like(s)";
    console.log(count);
}  

let count2 = 0;
let count2Element = document.querySelector("#count2");

console.log(count2Element);

function liked2() {
    count2++;
    count2Element.innerText = count2 + "-Like(s)";
    console.log(count2);
}

let count3 = 0;
let count3Element = document.querySelector("#count3");

console.log(count3Element);

function liked3() {
    count3++;
    count3Element.innerText = count3 + "-Like(s)";
    console.log(count3);
} 