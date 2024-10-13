// 1 /////////////////////////////
//Define an intersection type PersonWithAddress that combines Person and Address types.
// Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city

type Person = {
    name: string;
    age: number;
}

type Address = {
    street: string;
    city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: 'Old Men',
    age: 300,
    street: '1 street',
    city: 'last city'
}

console.log(personWithAddress);

// 2 //////////////////////////////////////////
//Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:
//
// "This is a number" for numbers.
// "This is a string" for strings.

const describeValue = (value: number | string): string => {
    if (typeof value === 'number') {
        return 'This is a number';
    }
    if (typeof value === 'string') {
        return 'This is a string';
    }
    return 'That is it?'
}

console.log(describeValue(42));
console.log(describeValue('Oh'));

// 3 /////////////////////////////////////////
//Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any = "I'm any and string.";
let someString: string = someValue as string;
console.log(someString + " I'm string now.")

// 4 //////////////////////////
// Create a function getFirstElement that takes an array of number | string and uses type assertions to return
// the first element as a string. Test with arrays of mixed types.

function getFirstElement(arr: (number | string)[]): string {
    if (typeof arr[0] === 'string') {
        return arr[0];
    }
    if (typeof arr[0] === 'number') {
        return arr[0].toString();
    }
    return 'That is it?'

}

console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([42, 42]));

// 5 /////////////////////////////
//Create a generic function logLength that takes a parameter of type T constrained to types with
// a length property (like string or Array). The function should log the length.

const logLength = <T extends {length: number}>(value: T): void => {
    console.log(value.length);
}

logLength([]);
logLength('');

// 6 //////////////////////////////
//Define a type Employee that combines Person and Job using intersection types.
// Create a function describeEmployee that takes an Employee object and uses type guards to return
// a description based on whether the Job is a Manager or a Developer.
//
// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Job = {
    position: string;
    department: string;
}

type PersonEx6 = {
    name: string;
    age: number;
}

type Employee = Job & PersonEx6;

const someEmployee: Employee = {
    position: 'Developer',
    department: 'someDepartment',
    name: 'John Doe',
    age: 25,
}

const describeEmployee = (employee: Employee):string => {
    if (employee.position === 'Manager') {
        return `This is a manager: ${employee.name}, ${employee.age}, ${employee.department}.`;
    }
    if (employee.position === 'Developer') {
        return `This is a developer: ${employee.name}, ${employee.age}, ${employee.department}.`;
    }
    return 'Who is this?'
}

console.log(describeEmployee(someEmployee));

// 7 ///////////////////////////////////////////
//Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method.
// Use type assertions to ensure the parameter is treated as a string for formatting.
// The function should format the input as a string.

const formatInput = <T extends {toString(): string}>(input: T): string => {
    return `Your string: ${input.toString()}`;
}

console.log(formatInput(123));
console.log(formatInput(false));