// // 1 ////////////////////////
// // Create a function call displayNumbersDivisible() that takes no parameter.
// // In the function, loop through numbers 0 to 500.
// // Console.log all the numbers divisible by 23.
// // Add a parameter divisor to the function
// function displayNumbersDivisible(divisor) {
//     let numbers = [];
//     for (let i = 0; i <= 500; i++){
//         if (i % divisor === 0) {
//             numbers.push(i);
//         }
//     }
//     let sum = numbers.reduce((sum, number) => sum + number, 0);
//     console.log(`${numbers} the numbers divisible by ${divisor} and their ${sum}`);
// }
// displayNumbersDivisible(3);
// displayNumbersDivisible(23);
// displayNumbersDivisible(45);

// // 2 ///////////////////////////////////
// // Add the stock and prices objects to your js file.
// //     Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
// //     It means that you have 1 banana, 1 orange and 1 apple in your cart.
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }
// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// let shoppingList = ['banana', 'orange', 'apple'];
//
// // Create a function called myBill() that takes no parameters.
// //     The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// //     The item must be in stock. (Hint : check out if .. in)
// // If the item is in stock find out the price in the prices object.
// // If the item is in stock, decrease the item’s stock by 1
// function myBill() {
//     let sum = 0;
//     for (let item of shoppingList) {
//         if ((item in stock) && (stock[item] > 0)) {
//             sum += prices[item];
//             stock[item] = stock[item] - 1;
//         }
//     }
//     return sum;
// }
// // Call the myBill() function.
// console.log(myBill());

// // 3 //////////////////////////////////////
// // Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// //     an item price
// // and an array representing the amount of change in your pocket.
//
// function changeEnough(itemPrice, amountOfChange){
//     // A quarters is 0.25
//     // A dimes is 0.10
//     // A nickel is 0.05
//     // A penny is 0.01
//     let valueCoins = [0.25, 0.10, 0.05, 0.01];
//     return itemPrice <= (amountOfChange[0] * valueCoins[0] + amountOfChange[1] * valueCoins[1]
//         + amountOfChange[2] * valueCoins[2] + amountOfChange[3] * valueCoins[3]);
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2,100,0,0]));
// console.log(changeEnough(0.75, [0,0,20,5]));

// // 4 ////////////////////////////////////////////
// // Define a function called hotelCost().
// //     It should ask the user for the number of nights they would like to stay in the hotel.
// //     If the user doesn’t answer or if the answer is not a number, ask again.
// //     The hotel costs $140 per night. The function should return the total price of the hotel.
// const reader = require('readline-sync');
//
// function hotelCost() {
//     let numberOfNights = NaN;
//
//     while (isNaN(numberOfNights) || numberOfNights <= 0) {
//         numberOfNights = Number(reader.question('How many nights would you like to stay? '));
//     }
//
//     const costPerNight = 140;
//     const totalCost = numberOfNights * costPerNight;
//     return totalCost;
// }
//
// // Define a function called planeRideCost().
// //     It should ask the user for their destination.
// //     If the user doesn’t answer or if the answer is not a string, ask again.
// //     The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$
// function planeRideCost() {
//     let goal = null;
//     while (goal === null || !isNaN(goal) || goal.trim() === '') {
//         goal = reader.question('Your destination? ');
//     }
//     if (goal === 'London') {
//         return 183;
//     } else if (goal === 'Paris') {
//         return 220;
//     } else {
//         return 300;
//     }
// }
//
// // Define a function called rentalCarCost().
// //     It should ask the user for the number of days they would like to rent the car.
// //     If the user doesn’t answer or if the answer is not a number, ask again.
// //     Calculate the cost to rent the car. The car costs $40 everyday.
// //     If the user rents a car for more than 10 days, they get a 5% discount.
// //     The function should return the total price of the car rental.
// function rentalCarCost() {
//     let countDays = NaN;
//     while (isNaN(countDays)) {
//         countDays = reader.question('How many days you need: ');
//     }
//     let costDay = 40;
//     let discount = 0.05;
//     let countDayForeDiscount = 10;
//     let totalPrice = countDays * costDay;
//     if (countDays > countDayForeDiscount) {
//         totalPrice = totalPrice - (totalPrice * discount);
//     }
//     return totalPrice;
// }
//
// // Define a function called totalVacationCost() that returns the total cost of the user’s
// // vacation by calling the 3 functions that you created above.
// //     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// //     Hint: You have to call the functions hotelCost(), planeRideCost()
// // and rentalCarCost() inside the function totalVacationCost().
// function totalVacationCost() {
//     console.log(`The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}.`)
// }
// totalVacationCost();