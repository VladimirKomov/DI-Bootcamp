import { readFile, writeFile } from '../db/dbHandler.js';
import path from 'path';
import {fileURLToPath} from 'url';

const thisFilePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(thisFilePath);
const dirStorage = path.join(dirPath, '../storage');

const fileScoresPath = path.join(dirStorage, 'score.json');

async function getScoreFromFile() {
    return await readFile(fileScoresPath);
}

async function addScoreToFile(data){
    const scores = await getScoreFromFile();
    console.log(scores);
    scores.push(data);
    await writeFile(fileScoresPath, scores);
}

export async function findScore(name){
    const scores = await getScoreFromFile();
    return scores.find(c => c.name === name);
}

export async function createScore(score){
    await addScoreToFile(score);
};

export async function updateScore(name, newScore){
    const scores = await getScoreFromFile();
    const score = scores.find(c => c.name === name);
    score.score = newScore;
    await writeFile(fileScoresPath, scores);
}