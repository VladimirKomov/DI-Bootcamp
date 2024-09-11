import {multiply, divide, plus, minus} from './math.js';
import {getData} from "./info.js";

console.log(multiply(0,2));
console.log(divide(4,0));
console.log(plus(2,2));
console.log(minus(2,2));

const url = 'https://jsonplaceholder.typicode.com/users';

console.log(await getData(url));

const fs = require("fs");
fs.

