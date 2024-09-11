// Create a directory named file-explorer.
//
//     Inside the file-explorer directory, create a file named copy-file.js.
//
//     In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
//
import {promises as fs} from 'fs';

async function readFile(filePath, encoding='utf8') {
    try {
        const data = await fs.readFile(filePath);
        return data;
    } catch (e) {
        console.error("Error reading", e.message);
    }
}

async function writeFile(filePath, data) {
    try {
        await fs.writeFile(filePath, data);
    } catch (e) {
        console.error("Error writing", e.message);
    }
}

const [,, sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
    console.error('File not found.');
    process.exit(1);
}

async function copyFile(source, destination) {
    try {
        await writeFile(destination, await readFile(source));
        console.log(`Successfully copied to ${destination} from ${source}`);
    } catch (e) {
        console.error("Error copy", e.message);
    }

}

copyFile(sourceFile, destinationFile);