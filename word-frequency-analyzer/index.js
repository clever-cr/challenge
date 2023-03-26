const wordAnalyzer = (text) => {
    const words = text.split(" ")
    const output = []
    for (let word of words) {
        let wordExisting = output.find((item) => (item.word === word.toLowerCase()))
        if (wordExisting) wordExisting.frequency += 1
        else output.push({ word: word.toLowerCase(), frequency: 1 })
    }
    output.sort((a, b) => (b.frequency - a.frequency))
}
