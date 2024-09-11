// Create another file named app.js.
//
//     In app.js, import the array of person objects from the data.js module.
//
//     Write a function that calculates and prints the average age of all the persons in the array.
//
//     Use the imported array and the average age function in app.js.
//
//     Run app.js and confirm that the average age is correctly calculated and displayed.

import {peopleArr} from "./data.js";

function calculateAge() {
    const totalAge = peopleArr.reduce((acc, p) => acc + p.age, 0);
    return totalAge/peopleArr.length;
}

console.log(calculateAge());