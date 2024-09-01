
// // 1 /////////////////////////////////////////////////
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
//
// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared
// // with const instead of let ?
// // you cannot change "count" variables

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }
//
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
//
// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?
// // error in step two
// // you cannot change "count" variables

// //#3
// function funcFour() {
//     window.a = "hello";
// }
//
//
// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
//
// // #3.1 - run in the console:
// funcFour()
// funcFive()
// 'a' is a global variable, it is available

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
//
//
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?
// // These are different 'a', everything will be ok

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
//
// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?
// // These are different 'a', everything will be ok, for if 'a' is 5, global 'a' is 2

// // 2 ---------------------------------------------------------
// // Transform the winBattle() function to an arrow function.
// // Create a variable called experiencePoints.
// //     Assign to this variable, a ternary operator. If winBattle() is true,
// //     the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// // Console.log the experiencePoints variable.
//
// function winBattle(){
//     return true;
// }
//
// count myTrue = () => true;
//
// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// // 2 ///////////////////////////////////////////////////////////////
// // Write a JavaScript arrow function that checks whether the value of the argument passed,
// //     is a string or not. The function should return true or false
// // Check out the example below to see the expected output
//
// const isString = (str) => str && typeof str === 'string';
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// // 4 //////////////////////////////////////////////
// // Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// // 5 /////////////////////////////////////////////////
// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// //
// // First, use function declaration and invoke it.
// //     Then, use function expression and invoke it.
// //     Write in a one line comment, the difference between function declaration and function expression.
// // Finally, use a one line arrow function and invoke it.
// function inGramsDeclaration(weightKg) {
//     return weightKg * 1000;
// }
// console.log(inGrams(5));
//
// //the declaration use the word "function" and function available everywhere,
// // the expression only after a function.
//
// const inGramsExpression = (coutKilo) => coutKilo * 1000;

// // 6 //////////////////////////////////////////////////
// // Create a self invoking function that takes 4 arguments: number of children, partner’s name,
// //     geographic location, job title.
// //     The function should display in the DOM a sentence like "You will be a <job title> " +
// // "in <geographic location>, and married to <partner's name> with <number of children> kids."
// ((numberOfChildren, parthersName, location, jobTitle) => {
//     console.log(`You will be a ${jobTitle} in ${location},
//     and married to ${parthersName} with ${numberOfChildren} kids.`)
// })(2, ['Bob', 'Ben'], 'anyLocation', 'goodJob');

// // // 7 ///////////////////////////////////////////////////////
// // John has just signed in to your website and you want to welcome him.
// //
// //     Create a Navbar in your HTML file.
// //     In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// // The function should add a div in the nabvar, displaying the name of the user and his profile picture.
//
// let profilePicture = 'https://i.pinimg.com/564x/3f/f7/bc/3ff7bc1c1a84c24b545ed1255fc343f0.jpg';
//
// ((username) => {
//     let navBar = document.getElementById('navBar');
//
//     let newDiv = document.createElement('div');
//     newDiv.textContent = `Hi ${username}`;
//
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', `${profilePicture}`);
//     newImg.style.width = '50px';
//     newImg.style.height = '50px';
//
//     newDiv.appendChild(newImg);
//     navBar.appendChild(newDiv);
//
// })('Bob');

// 8 ///////////////////////////////////////////////////
// You will use nested functions, to open a new juice bar.
//
//     Part I:
//     The outer function named makeJuice receives 1 argument:
//     the size of the beverage the client wants - small, medium or large.
//
//     The inner function named addIngredients receives 3 ingredients,
//     and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>,
//     <second ingredient>, <third ingredient>".
//
//     Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// const sizeJuice = ['small', 'medium', 'large'];
//
// function makeJuice(size) {
//     const ingredients = ['firstIngredient', 'secondIngredient', 'thirdIngredient']
//     console.log(addIngredients(ingredients));
//
//     function addIngredients() {
//         return `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
//     }
// }
//
// makeJuice(sizeJuice[0]);

// In the makeJuice function, create an empty array named ingredients.
//
//     The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
//
//     Create a new inner function named displayJuice that displays on the DOM a sentence
// like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
//
//     The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
//     Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// const sizeJuice = ['small', 'medium', 'large'];
//
// function makeJuice(size) {
//     const ingredients = [];
//     addIngredients('firstIngredient', 'secondIngredient', 'thirdIngredient');
//     addIngredients('firstIngredient', 'secondIngredient', 'thirdIngredient');
//     displayJuice();
//
//     function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
//         ingredients.push(firstIngredient);
//         ingredients.push(secondIngredient);
//         ingredients.push(thirdIngredient);
//     }
//
//     function displayJuice() {
//         console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}.`);
//     }
// }
//
// makeJuice(sizeJuice[0]);