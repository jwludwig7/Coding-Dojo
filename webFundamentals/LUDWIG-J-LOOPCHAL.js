// print 1-20 of odd numbers

function PrintOdds() {
    for (let i = 1; i < 21; i++) {
        if(i % 2 === 1) {
            console.log(i);
        }
    }
}
PrintOdds();

// decreasing of multiples of 3

function decreaseBy3() {
    for (let i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
decreaseBy3();

// print the sequencne

let arr = [4,2.5,1,-.5,-2,-3.5]
    for (i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }



// sigma sum of 1-100

function sigma() {
    let sum = 0;
    for (let i = 1; i <101; i++) {
        sum+= i
    }
    console.log(sum);
}
sigma();

//factorial * all the values from 1-12

function factorial(){
    let variables = 1;
    for(let i = 1; i < 13; i++) {
        variables *= i;
    }
    console.log(variables);
}
factorial();
