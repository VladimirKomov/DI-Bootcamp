// 1 //////////////////////
//Write a function called processValue that accepts one parameter of type string | number.
// If the input is a number, format it as a currency string (e.g., $100.00).
// If the input is a string, return the reversed version of the string.

type CustomType = string | number;

const processValue = (input: CustomType): string => {
    if (typeof input === 'number') {
        return `$${input.toFixed(2)}`;
    }
    if (typeof input === 'string') {
        return input.split('').reverse().join('');
    }
}

console.log(processValue(100));
console.log(processValue('Hello World!'));

// 2 ////////////////////////////////////////
//Create the Function:
// Write a function named sumNumbersInArray that accepts an array of number | string.
// Iterate through the array and sum only the number values, ignoring strings.

type CustomTypeArray = (number | string)[];

const sumNumbersInArray = (arr: CustomTypeArray): number => {
    let sum: number = 0;

    for (const value of arr) {
        if (typeof value === 'number') {
            sum += value;
        }
    }
    return sum;
}

const mixedArray: CustomTypeArray = [1, 'hello', 2, 'world', 3];
console.log(sumNumbersInArray(mixedArray));

// 3 ///////////////////////////////////
//Define a Type Alias:
// Create a type alias called AdvancedUser that represents a user object with the properties: name, age, and an optional address.
//
// Implement the Function:
//
// Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the user’s name and age.
// If the address property is present, include it in the greeting message.
//
// Test the Function:
//
// Test introduceAdvancedUser with and without the address property.

type AdvancedUser = {
    name: string;
    age: number;
    address?: string;
}

const introduceAdvancedUser = (user: AdvancedUser): string => {
    if (user.address) {
        return `Hi, my name is ${user.name}, I am ${user.age} years old, and I live at ${user.address}.`;
    }
    return `Hi, my name is ${user.name} and I am ${user.age} years old.`;
}

const user: AdvancedUser = {name: 'Bob', age: 30};
const userWithAddress: AdvancedUser = {name: 'Bob', age: 30, address: 'All world'};

console.log(introduceAdvancedUser(user));
console.log(introduceAdvancedUser(userWithAddress));

// 4 ///////////////////////////////////////
//Create the Function:
// Write a function welcomeUser that takes a required name and an optional greeting.
// If no greeting is provided, use "Hello" as the default.
//
// Test the Function:
//
// Test welcomeUser with and without a custom greeting.

const welcomeUser = (nameP: string, greeting?: string) => {
    return greeting ? `${greeting}, ${nameP}!` : `Hello, ${nameP}!`;
}

console.log(welcomeUser('Alice'));
console.log(welcomeUser('Bob', 'My dear'));
