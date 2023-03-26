export const shuffleQuestions = (questions) => questions.sort(() => Math.random() - 0.5)

export const displayQuestion = (currentQuestion) => {
    console.log(currentQuestion.question)
    console.log(" ")
    currentQuestion.answers.forEach((answer) => { console.log(answer) })
    console.log(" ")
}

export const displayResults = (results) => {
    let score = 0

    for (let result of results) {
        console.log("For the question:", result.question)
        console.log("You answered", result.selectedAnswer)
        console.log("The correct answer is", result.correctAnswer)
        console.log(" ")
        if (result.selectedAnswer.toLowerCase() === result.correctAnswer.toLowerCase()) score += 1
    }
    console.log(" ")
    console.log(`You got ${score}/${results.length}`)
}