//process.stdin
//process.stdout.write("Good morning,");
//process.stdout.write("how are you today? \n\n\n\n");

const questionsArray = [
    "What is your name?",
    "How old are you?",
    "What is your favorite song?"
];

const askQuestions = (i = 0) => {
    process.stdout.write(`\n\n ${questionsArray[i]}`);
    process.stdout.write(` >>>> `);
};

askQuestions();