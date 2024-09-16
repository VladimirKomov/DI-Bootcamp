import {getQuestionsFromData, makeResult, saveAnswer} from "../servises/quizServise.js";
import res from "express/lib/response.js";

export const getQuestions = (req, res) => {
    const questions = getQuestionsFromData();
    res.status(200).json(questions);
};

export const addAnswer = (req,res) => {
    const answer = req.body;
    console.log("Get answer: " + answer);
    saveAnswer(answer);
    res.status(200).json(answer);
};

export const getResult = (req, res) => {
    const result = makeResult();
    console.log('Get result: ', result);
    res.status(200).json(result);
}