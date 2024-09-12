import {promises as fs} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const thisFilePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(thisFilePath);

export async function readFile(pathFile, encoding = 'utf8') {
    try {
      const data = await fs.readFile(pathFile, encoding);
      return data;
    } catch (e) {
        throw new Error(`Could not read file: ${pathFile}`);
    }
}

export const filePath = path.join(dirPath, '/files/file-data.txt');


