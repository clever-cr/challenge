import data from "./data.mjs";
import prompt from "./prompt.mjs";
import { shuffleQuestions, displayQuestion, displayResults } from "./helpers.mjs";

const results = [];
let count = 0
let shuffledQuestions = shuffleQuestions(data)

const perfomQuiz = () => {
    if (count === data.length) {
        prompt.close();
        displayResults(results)
        return
    }
    let currentQuestion = shuffledQuestions[count]
    displayQuestion(currentQuestion)

    prompt.question("", answer => {
        console.log(" ")
        results.push({ question: currentQuestion.question, selectedAnswer: answer, correctAnswer: currentQuestion.correct })
        count += 1
        perfomQuiz()
    });
}
perfomQuiz()