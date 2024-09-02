/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

const example = [0,1,1,2,3,5,8];

const newArray = example.filter(value => value > 3);
console.log(newArray);

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

const newArray2 = [0,1,1,2,3,5,8];
const sum = newArray2.reduce((acc, cur) => acc + cur, 0);
console.log(sum);