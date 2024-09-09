// 1 ///////////////////////////////////////
// Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//     the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

function compareToTen(nun) {
    return new Promise((resolve, reject) => {
            if (nun < 11) {
                resolve(nun);
            } else {
                reject('Error');
            }
        }
    )
};

// In the example, the promise should reject
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// 2 //////////////////////////////////////////////////
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 4 * 1000)
});

myPromise
.then(result => console.log(result));

// 3 //////////////////////////////////////////////////////
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const myPromise1 = Promise.resolve(3);
myPromise1
    .then(result => console.log(result))
    .catch(error => console.log(error));
const myPromise2 = Promise.reject('Boo!');
myPromise2
    .then(result => console.log(result))
    .catch(error => console.log(error));