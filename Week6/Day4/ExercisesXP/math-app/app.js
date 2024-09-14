// Create a file named server.js in the same directory.
//
//     In server.js, require the lodash package and the custom math module.
//
//     Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
//
//     Run server.js using Node.js and verify that the calculations are correct.

import {addition, multiplication} from "./math.js";
import _ from "lodash";

const a = 3;
const b = 2;

console.log(addition(a, b));
console.log(multiplication(a, b));

console.log(_.add(a, b));
console.log(_.multiply(a, b));