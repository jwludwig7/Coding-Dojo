console.log("page loaded...");

let requestSpan = document.querySelector("#requests");
let connnectionSpan = document.querySelector("#connections");
let userName = document.querySelector("#userName");

function accept(id) {
    let element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connnectionSpan.innerText++;
}

function ignore(id) {
    let element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    userName.innerText = "Jordan L";
}