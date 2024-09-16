import express from 'express';
import {addAnswer, getQuestions, getResult} from "../controllers/quizController.js";

export const router = express.Router();

router.get('/quiz', getQuestions);

router.post('/quiz', addAnswer);

router.get('/quiz/score', getResult);
