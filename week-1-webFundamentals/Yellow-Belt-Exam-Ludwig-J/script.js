let count = 0;
let countElement = document.querySelector("#count");

console.log(countElement);

function score1() {
    count++;
    countElement.innerText = count + 319;
    console.log(count);
}  

let count2 = 0;
let count2Element = document.querySelector("#count2");

console.log(count2Element);

function score2() {
    count2++;
    count2Element.innerText = count2 + 164;
    console.log(count2);
}

let subDiv = document.querySelector(".sub")

function sub(element) {
    subDiv.remove();
}

function ninjasWin(){
    alert("The Ninjas have Won!")
}

setTimeout(ninjasWin, 13000)
