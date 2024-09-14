import { readFile, writeFile } from '../db/dbHandler.js';
import path from 'path';
import {fileURLToPath} from 'url';

const thisFilePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(thisFilePath);
const dirStorage = path.join(dirPath, '../storage');

const fileUsersPath = path.join(dirStorage, 'users.json');

async function getUsersFromFile() {
    return await readFile(fileUsersPath);
}

async function addUserToFile(data){
    const users = await getUsersFromFile();
    console.log(users);
    users.push(data);
    await writeFile(fileUsersPath, users);
}

export async function findUser(name){
    const users = await getUsersFromFile();
    return users.find(user => user.name === name);
}

export async function createUser(user){
    await addUserToFile(user);
};




