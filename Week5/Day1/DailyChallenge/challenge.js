let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries,
//     that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
    for (let fruit of groceries.fruits) {
        console.log(fruit);
    }
}
displayGroceries();

// Create another arrow function named cloneGroceries.
//     In the function, create a variable named user that is a copy of the client variable.
// (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//     In the function, create a variable named shopping that is equal to the groceries variable.
//     Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//     Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => {

    // This is the copy, not the reference
    let user = client;
    client = 'Betty';
    console.log(user);

    // This is the reference, not the copy
    let shopping = groceries;
    groceries.totalPrice = '35$';
    console.log(shopping.totalPrice);

    //they have reference to the same place in memory
    groceries.other.paid = false;
    console.log(shopping.other.paid);
}

// Invoke the cloneGroceries function.
cloneGroceries();

