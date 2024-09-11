// Create a file named fileManager.js.
//
//     Inside fileManager.js, define a module that exports functions for reading and writing files.
//     Export functions named readFile and writeFile.
//     Implement the readFile function to read the content of a specified file using the fs module.
//     Implement the writeFile function to write content to a specified file using the fs module.

import {promises as fs} from 'fs';

async function readFile(path, encoding = 'utf8') {
    try {
        const data = await fs.readFile(path, encoding);
        return data;
    } catch (e) {
        console.error("Error reading", e.message);
    }
}

async function writeFile(path, data) {
    try {
        await fs.writeFile(path, data);
    } catch (e) {
        console.error("Error writing", e.message);
    }
}

export {readFile, writeFile};