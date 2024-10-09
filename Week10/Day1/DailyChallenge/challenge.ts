//Create a function processInput that accepts an input of type number | string | boolean. The function should perform the following operations:
//
// If the input is a number, return its square.
// If the input is a string, return the uppercase version of the string.
// If the input is a boolean, return the negated value.

type CustomType = number | string | boolean;

const processInput = (input: CustomType): CustomType => {
    if (typeof input === 'number') {
        return input * 2;
    } else if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === 'boolean') {
        return !input;
    } else {
        return 'Unknown type';
    }
}

console.log(processInput(5));
console.log(processInput("hello"));
console.log(processInput(true));