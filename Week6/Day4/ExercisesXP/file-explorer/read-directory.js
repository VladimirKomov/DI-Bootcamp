// Create another file named read-directory.js.
//
//     In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.
//
//     Open a terminal in the file-explorer directory.
//
//     Run node copy-file.js to copy the content from source.txt to destination.txt.
//
//     Run node read-directory.js to list the files in the directory.

import {promises as fs} from 'fs';

const dirPath = '.';

async function dirReader(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        files.forEach(file => {
           console.log(file);
        });
    } catch (e) {
        console.error("Error reading directory", e.message);
    }
}

dirReader(dirPath);

