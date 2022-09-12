//function that passes two variables and figures ouut the remainder of pieces of cake
//different console logs for different circumstances of paramaters

function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    let remainingPieces = numberOfPieces - numberOfPeople;
    if (remainingPieces === 0) {
        console.log("No leftovers for you!");
    }
    if (remainingPieces >= 1 && remainingPieces <= 2) {
        console.log("You have some left overs");
    }
    if (remainingPieces >=3 && remainingPieces <= 5) {
        console.log("You have leftovers to share");
    }
    if (remainingPieces > 5) {
        console.log("Hold another party!")
    }
}
howMuchLeftOverCake(20,20);