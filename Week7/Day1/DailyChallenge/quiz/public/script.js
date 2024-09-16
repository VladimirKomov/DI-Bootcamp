// const questions = [
//     {
//         question: "What is the capital of France?",
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//     },
//     {
//         question: "What is the largest mammal in the world?",
//     },
// ];


let questions = [];
let countQuestions = 0;
let currentQuestion = 0;
const numberQuestion = document.getElementById('numberQuestion');
const question = document.getElementById('question');
const butNextQuestion = document.getElementById('nexQuestion');
const answer = document.getElementById('answer');
let results = [];

const getData = async (url, options) => {
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};

const sendData = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await res.json();
        console.log(responseData);
        return responseData;
    } catch (e) {
        console.log('Error:', e);
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    try {
        questions = await getData('http://localhost:3000/quiz', { method: 'GET' });
        countQuestions = questions.length;

        if (questions && countQuestions) {
            renderQuestion();
        }
    } catch (e) {
        console.error('Error', e.textContent);
    }
});

butNextQuestion.addEventListener("click", async (event) => {
    event.preventDefault();
    const dataAsnswer = {answer};
    await sendData('http://localhost:3000/quiz', { answer: answer.value});
    currentQuestion++;
    if (currentQuestion < countQuestions) {
        renderQuestion();
    } else {
        butNextQuestion.disabled = true;
        alert('All questions are completed! Thanks for the answers.');
    }

});

function renderQuestion() {
    answer.value = '';
    numberQuestion.textContent = `Question ${currentQuestion + 1} of ${countQuestions}`;
    question.textContent = questions[currentQuestion].question;
}

document.addEventListener("submit", async event => {
    event.preventDefault();
    try {
        results = await getData('http://localhost:3000/quiz/score', { method: 'GET' });
        renderResult();
    } catch (e) {
        console.error('Error', e.textContent);
    }
});

function renderResult() {
    for (result of results) {
        const resultsContainer = document.getElementById('resultsContainer');

        const resultContainer = document.createElement('div');
        resultContainer.style.border = "2px solid black";

        const pQuestion = document.createElement('p');
        pQuestion.textContent = result.question;
        const pAnswer = document.createElement('p');
        pAnswer.textContent = `Right answer ${result.answer}`;
        const pUserAnswer = document.createElement('p');
        pUserAnswer.textContent = `Your answer ${result.userAnswer}`;

        resultContainer.appendChild(pQuestion);
        resultContainer.appendChild(pAnswer);
        resultContainer.appendChild(pUserAnswer);

        resultsContainer.appendChild(resultContainer);
    }
}

