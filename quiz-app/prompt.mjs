import readline from "readline"

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default prompt;