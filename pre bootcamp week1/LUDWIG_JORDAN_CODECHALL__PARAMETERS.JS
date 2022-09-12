/*
    function for a greeting
    else if / or if time is before 12 console.log will state morning greeting
    else if time is after or equal to 12 it will give standard or afternoon greeting
    else is just your standard greeting
    if there is a let there needs to be a return statment without a console.log
*/

function greeting(person, time) {
    if (person === "Anakin" && time >= 12) {
        console.log("Good afternoon, Anakin!");
    }
    else if (person === "Count Dooku" && time >= 12) {
        console.log("I'm coming for you, Dooku!");
    }
    else if (person === "Anakin" && time < 12) {
        console.log("Good Morning, Anakin!");
    }
    else if (person === "Count Dooku" && time < 12) {
        console.log("Bad Morning Count, I'm coming for you!");
    }
    else {
        console.log("Hey hows it going? Have you seen Dooku?");
    }
}
greeting("Anakin", 14);
greeting("Count Dooku", 12);
greeting("Alfredo");

