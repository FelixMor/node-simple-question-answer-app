const questions = [
    "What is your name?",
    "How old are you?",
    "What is your favorite song?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` >>>> `);
};

ask();

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString.trim());
    process.exit();

});