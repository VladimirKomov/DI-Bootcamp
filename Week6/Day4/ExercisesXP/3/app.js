// Create another file named app.js.
//
//     In app.js, import the functions from the fileManager.js module.
//
//     Use the imported functions to read the content of the “Hello World.txt”
//     text file and then write to the “Bye World.txt” with the content “Writing to the file”.
//
// Run app.js and verify that the file reading and writing operations are successful.

import {readFile, writeFile} from "./fileManager.js";

const readPath = 'Hello World.txt';
const writePath = 'Bye World.txt';

console.log(`Read ${readPath}`, await readFile(readPath));
console.log(`Read ${writePath}`, await readFile(writePath));
writeFile(writePath, 'Writing to the file');
console.log(`Read ${writePath}`, await readFile(writePath));

