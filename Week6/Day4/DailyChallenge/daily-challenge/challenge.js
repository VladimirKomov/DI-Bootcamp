import {greet} from "./greeting.js";
import {colorfulGreet} from "./colorful-message.js";
import {filePath} from "./read-file.js";
import {readFile} from "./read-file.js";

console.log(colorfulGreet(greet('Vova')));

console.log(colorfulGreet(await readFile(filePath)));