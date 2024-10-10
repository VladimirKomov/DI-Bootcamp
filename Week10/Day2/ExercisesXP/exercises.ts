// 1 //////////////////////////
//Create a class Employee with the following properties:
//
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties.
// Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
    private name: string;
    private salary: number;
    private position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo(): string {
        return `${this.name} works in ${this.department} department`;
    }
}

let employee = new Employee("John Doe", 50000, "Software Developer", "IT");
console.log(employee.getEmployeeInfo());

// 2 ////////////////////////
//Create a class Product with the following properties:
//
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price.
// Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    readonly id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `${this.name} - $${this.price}`;
    }
}

let product = new Product(1, "Apple", 10);
console.log(product.getProductInfo());

// product.id = 2;

// 3 ////////////////////////////
//Create a base class Animal with a public property name and a method makeSound that returns a string.
// Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”).
// Create an instance of the Dog class and call the makeSound method.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return 'sound';
    };
}

class Dog extends Animal {

    constructor(name: string) {
        super(name);
    }

    override makeSound(): string {
        return 'bark';
    };
}

let goodBoy = new Dog("Buddy");
console.log(goodBoy.makeSound());

// 4 ////////////////////////////
//Create a class Calculator with the following static methods:
//
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(1,2));
console.log(Calculator.subtract(1,2));

// 5 //////////////////////////////////////
//Create an interface User with properties id (readonly), name, and email. Extend the User interface to create
// a PremiumUser interface with an additional optional property membershipLevel. Create a function printUserDetails
// that accepts a PremiumUser and logs the details to the console.

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

const printUserDetails = (user: PremiumUser): void => {
    console.log('id => ', user.id);
    console.log('name => ', user.name);
    console.log('email =>', user.email);

    if (user.membershipLevel) {
        console.log('membershipLevel =>', user.membershipLevel);
    }
}

const usualUser: PremiumUser = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com'
}

const premiumUser: PremiumUser = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    membershipLevel: 'Gold'
}

printUserDetails(usualUser);
printUserDetails(premiumUser);