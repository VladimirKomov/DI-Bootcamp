import {triviaQuestions} from '../config/data.js';
import * as console from "node:console";

const game = [];
const answers = [];

export function getQuestionsFromData() {
    const questions = triviaQuestions.map(({ question }) => ({ question }));
    return questions;
}

export function saveAnswer(answer) {
    answers.push(answer.answer);
    console.log('Saving answer: ', answer.answer);
}

export function makeResult(){
    const results = triviaQuestions.map((item, index) => ({
        question: item.question,
        answer: item.answer,
        userAnswer: answers[index] // Добавляем userAnswer на основе индекса
    }));
    console.log('Make result: ' + results);
    return results;
}