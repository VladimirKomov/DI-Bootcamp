// Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
//
//     Install the chalk package by running npm install chalk in the terminal.
//
//     Create a file named colorful-message.js.
//
//     In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

import chalk from "chalk";
import {greet} from "./greeting.js";

export function colorfulGreet(message) {
    return chalk.green.bold.underline(message);
}