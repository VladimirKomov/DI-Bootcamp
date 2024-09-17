import {promises as fs} from 'fs';

export async function readFile(filePath, encoding='utf8') {
    try {
        const data = await fs.readFile(filePath);
        return JSON.parse(data);
    } catch (e) {
        throw new Error(`Error reading file: ${e.message}`);
    }
}

export async function writeFile(filePath, data) {
    try {
        data = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, data);
    } catch (e) {
        throw new Error(`Error writing file: ${e.message}`);
    }
}