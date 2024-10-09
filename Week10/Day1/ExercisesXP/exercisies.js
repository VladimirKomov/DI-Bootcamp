// // 1 ////////////////////
// // Create a TypeScript program that logs the message “Hello, World!” to the console.
// const hello: string = 'Hello, World!';
// console.log(hello);
// //2 ////////////////////
// // Define a variable age of type number and a variable name of type string, and log them to the console.
// let personAge: number = 40;
// //I can use 'name' it's global
// let personName: string = 'Jon';
// console.log(personAge, personName);
// // 3 ////////////////////////////
// // Use union types to declare a variable id that can be either a string or a number.
// let id: string | number;
// id = 'abc';
// console.log(id);
// id = 123;
// console.log(id);
// // 4 //////////////////////////////
// // Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
//     // Use if...else statements to control the flow of a program.
// const checkNumber = (num: number): string => {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// };
//
// console.log(checkNumber(1));
// console.log(checkNumber(-1));
// console.log(checkNumber(0));
// // 5 ///////////////////////////////
// // Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// //     The tuple should contain multiple values of different types
// const getDetails = (pName: string, age: number): [string, number, string] => {
//     return [pName, age, `Hello, ${pName}! You are ${age} years old.` ];
// }
// const details: [string, number, string] = getDetails("Alice", 25);
// console.log(details);
// // 6 ////////////////////////////////////
// // Define the Object Structure:
// //     Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).
// //
// // Create the Function:
// //
// //     Write a function named createPerson that takes two parameters: name (string) and age (number).
// //     The function should return an object that matches the Person structure.
// //
// //     Test the Function:
// //
// //     Test the createPerson function by creating a person and logging the result to the console.
//
// interface Person {
//     name: string;
//     age: number;
// };
//
// const createPerson = (pName: string, age: number ): Person => {
//     return {
//         name: pName,
//         age: age,
//     };
// }
//
// console.log(createPerson('Name', 18));
// 7 ////////////////////////////////////////////////////////////
var element = document.getElementById('my-input');
if (element) {
    element.value = 'Hello, World!';
}
