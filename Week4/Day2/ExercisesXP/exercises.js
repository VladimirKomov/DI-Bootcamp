// 1 ///////////////////////////////

const people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.shift();

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");

// Write code to add your name to the end of the people array.
people.push("Vladimir");

// Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary")); // 0

// Write code to make a copy of the people array using the slice method
// The copy should NOT include “Mary” or your name.
const peopleCopy = people.slice(0, 3);
console.log(peopleCopy);

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")); // "Foo" is not in the array, so it returns -1

// Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last);

// Using a loop, iterate through the people array and console.log each person.
for (let person of people) {
    console.log(person);
}

// Using a loop, iterate through the people array and exit 
// the loop after you console.log “Devon” .
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}

// 2 ////////////////////////////////////////
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["jetBlack", "onyx", "rubyBlack", "oxBlood", "blood"];

// Loop through the array and as you loop console.log a string like so: 
// “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, 
// “My 3rd choice”, picking the correct suffix for each number.
const suffixes = ["th", "st", "nd", "rd"];
for (let i = 0; i < colors.length; i++) {
    let suffix;
    if (i === 0) {
        suffix = suffixes[i + 1];
    } else if (i === 1) {
        suffix = suffixes[i + 1];
    } else if (i === 2) {
        suffix = suffixes[i + 1];
    } else {
        suffix = suffixes[0];
    }
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// 3 ////////////////////////////////////////
// Prompt the user for a number.
let number = Number(prompt("Enter a number smaller than 10:"));
// Check if the input is a valid number.
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

while (isNaN(number) || number >= 10) {
    number = Number(prompt("Invalid input. Please enter a number smaller than 10:"));
}

// 4 ////////////////////////////////////////
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
let secondTenant = building.nameOfTenants[1];
let secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLocaleLowerCase()][0];
console.log(`The second tenant is ${secondTenant} and 
he has ${secondTenantRooms} rooms in his apartment.`);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// If it is, than increase Dan’s rent to 1200.
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];
if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("New Dan's rent:", building.numberOfRoomsAndRent.dan[1]);
}

// 5 ////////////////////////////////////////
// Create an object called family with a few key value pairs.
const family = {
    husband: "Vladimir",
    wife: "Elena",
    cat: "Sausage"
}
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
for (let member in family) {
    console.log(member + ": " + family[member]);
}

// 6 ////////////////////////////////////////
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

//   Given the object above and using a for loop, console.log 
// “my name is Rudolf the reindeer”
let string = '';
for (let key in details) {
    string += `${key} ${details[key]} `;
}
console.log(string.trim());

// 7 //////////////////////////////////
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names 
// sorted in alphabetical order.
let societyNameArray = []; 
for (let name of names) {
    societyNameArray.push(name[0]);
}
// Console.log the name of their secret society. The output should be “ABJKPS”
societyNameArray.sort();
let societyName = societyNameArray.join('');
console.log(societyName);



