// Create another file named app.js in the same directory.
//
//     In app.js, require the greeting.js module and use the greet function to greet a user.
//
//     Run app.js using Node.js and see the greeting message.

import {greet} from "./greeting.js";
import {colorfulGreet} from "./colorful-message.js";

console.log(greet('Vova'));

// In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.
//
//     Run app.js using Node.js and see the colorful message.

console.log(colorfulGreet('Vova'));

// In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.
//
//     Run app.js using Node.js and see the content of the file.

import {filePath} from "./read-file.js";
import {readFile} from "./read-file.js";

console.log(await readFile(filePath));