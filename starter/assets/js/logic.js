// const startQuizElement = document.querySelector('#start')

// startQuizElement.innerText = "Begin quiz"

// document.getElementById('start').innerText = "Begin QUiz"

// document.getElementById('start').style.backgroundColor = 'Green'

// import question from question file

// import {questions} from "./questions.js",

// select elements based on class and id from html
const startScreenElement = document.querySelector('#start-screen');
const endScreenElement = document.querySelector('#end-screen');
const startBtn = document.querySelector('#start')
const timerElement = document.querySelector('#time')
const questionElement = document.querySelector('#questions');
const questionTitleElement = document.querySelector('#question-title');
const questionChoicesElement = document.querySelector('#coices')
const feebackElement = document.querySelector('#feedback')
const finalScoreElement = document.querySelector('#final-score')

// Initializations 
let remainingTime = 100;
let finalScore = 0;
let timerInterval;

// Write function for ending the quiz
function endQuiz() {
    questionElement.classList.add('hide')
    endScreenElement.classList.remove('hide')
    finalScoreElement.innerText = finalScore;
    timerElement.innerText = 0;
}

timerElement.innerText = `${remainingTime}s`

// Function for updating timer
function updateTimer() {
    timerElement.innerText = `${remainingTime}s`

// condition for ending the quiz
    if(remainingTime) {
        clearInterval(timerInterval)
        endQuiz()
    } else{
        remainingTime -= 1
    }
}

// Function for eventListener
startBtnElement.addEventListener('click', () => {
    startScreenElement.classList.add('hide')
    timerInterval = setInterval(updateTimer, 1000)
    updateTimer()

    const allQuestions = questions.map((questionObj, index) => {
        let currentQuestion = `Q${index + 1 }. ${questionObj.question}`
        let currentAnswerOptions = ""
        questionObj.options.forEach(Option =>{
            
        })
    })
})





