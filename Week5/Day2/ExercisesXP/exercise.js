// // 1 /////////////////////////////////////////////
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//
// // Write a JavaScript program that displays the colors in the following order :
// // “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//
// colors.forEach((color, index) => {
//     console.log(`${index + 1}# choice is ${color}.`);
// });
//
// // Check if at least one element of the array is equal to the value “Violet”.
// // If yes, console.log("Yeah"), else console.log("No...")
// // Hint : Use the array methods taught in class. Look at the lesson Array Methods.
//
// colors.includes("Violet") ? console.log('Yeah') : console.log('No...');

// // 2 ////////////////////////////////////////////////
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
//
// // Write a JavaScript program that displays the colors in the following order :
// // “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
//
// colors.forEach((color, i) => {
//     let orderStr = (i + 1 === 1 || i + 1 === 2 || i + 1 === 3) ? `${i + 1}${ordinal[i]}` : `${i + 1}${ordinal[0]}`;
//     console.log(`${orderStr} chose is ${color}`);
// });

// // 3 //////////////////////////////////////////////////////
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
//
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); // [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
//
// // ------2------
// const country = "USA";
// console.log([...country]); //[ 'U', 'S', 'A' ]
//
// // ------Bonus------
//     let newArray = [...[,,]];
// console.log(newArray); // [ undefined, undefined ]

// // 4 /////////////////////////////////////////
// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];
//
// // Using the map() method, push into a new array the firstname of the user and a welcome message.
// const welcomeStudents = users.map(user =>`Hello ${user.firstName}`);
// console.log(welcomeStudents);
//
// // Using the filter() method, create a new array, containing only the Full Stack Residents.
// const fullStacks = users.filter(user => user.role === 'Full Stack Resident');
// console.log(fullStacks);
//
// // Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
// const lastNameFullStacks = users
//     .filter(user => user.role === 'Full Stack Resident')
//     .map(user => user.lastName);
// console.log(lastNameFullStacks);

// // 5 ////////////////////////////////////////////////////////////
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//
// // Use the reduce() method to combine all of these into a single string.
// const singleStr = epic.reduce((acc, str) => acc + ' ' + str, '');
// console.log(singleStr);

// // 6 ////////////////////////////////////////////////////////
// const students = [
//     {name: "Ray", course: "Computer Science", isPassed: true},
//     {name: "Liam", course: "Computer Science", isPassed: false},
//     {name: "Jenner", course: "Information Technology", isPassed: true},
//     {name: "Marco", course: "Robotics", isPassed: true},
//     {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//     {name: "Jamie", course: "Big Data", isPassed: false}
// ];
//
// // Using the filter() method, create a new array, containing the students that passed the course.
// const passedStudents = students.filter(student => student.isPassed);
//
// // Chain the filter method with a forEach method, to congratulate the students with their name and course name
// // (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed
// // the course in Robotics” ect…)
// students.filter(student => student.isPassed)
//     .forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}.`)
//     );