//a function the determines when "i" get dont with HW and what to treat myself with, parameters met will get a response
// feature 1 - IF up for ice cream strawberry on weds, otherwise vanilla
//featture 2 - times 3-6pm have to pick ice cream or hot choc depending if time is even or odd


function whatIDeserve(time, day) {
    if (time <= 10 ) {
        console.log("Go get a latte!");
    }
    if (time > 10 && time < 16) {
        console.log("Got get a hot coco!");
    }
    if (time > 16 && time < 22 && day === "Wednesday") {
        console.log("Go get some strawbarry ice cream!");
    }
    else (time > 16 && time < 22); {
        console.log("Go get some ice cream!");
    }
    if (time >= 22) {
        console.log("Get some sleep mang!!");
    }
}
whatIDeserve(17, "Friday");

//Feature 2

function whatIDeserve(time) {
    if (time <= 10 ) {
        console.log("Go get a latte!");
    }
    if (time > 10 && time < 12) {
        console.log("Got get a hot coco!");
    }
    if (time === 13 || time === 15) {
        console.log("Go get some hot coco ODDo!");
    }
    if (time === 14 || time === 16) {
        console.log("Go get some EVEN ice cream scoops!");
    }
    if (time >= 22) {
        console.log("Get some sleep mang!!");
    }
}
whatIDeserve(15);