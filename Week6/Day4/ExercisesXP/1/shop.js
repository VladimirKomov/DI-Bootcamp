// Create another file named shop.js.
//
//     In shop.js, require the product objects from the products.js module.
//
//     Create a function that takes a product name as a parameter and searches for the corresponding product object.
//
//     Call this function with different product names and print the details of the products.
//
//     Run shop.js and verify that the correct product details are displayed.

const arr = require('./products.js');

function find(name) {
    const product = arr.find(p => p.name === name );
    if (product) {
        console.log(product);
    } else {
        console.log('Not found')
    }
}

arr.forEach(element => find(element.name));
find('Nothing');