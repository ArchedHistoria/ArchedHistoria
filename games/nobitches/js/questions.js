const questions = [
    {
        question: "How many times do you mention your gaming setup in a conversation with a female?",
        options: ["0 times", '1-3 times', '5+ times']
    },
    {
        question: "How many times a week do you shower/touch grass?",
        options: ["0 times", "3-4 times", "7 times"]
    },
    {
        question: "Do you watch/jerk off to Andrew Tate",
        options: ["Yes", "No", "I actually hooked up with him"],
    },
    {
        question: "Do you play any Paradox game,  Total war game, League of Legends or Counter-Strike?",
        options: ["Yes", "No", "I am Napoleon", "i jerk off to Osamas feet pics"]
    },
    {
        question: "Do you give money to onlyfans thots?",
        options: ["Yes", "No", "I am Napoleon"]
    },
    {
        question: "Do you like men?",
        options: ["Yes", "No", "I am James Charles"]
    },
    {
        question: "Are you diagnosed with Autism/socially retardation?",
        options: ["Yes", "No", "...Hm Tja... Eventuel?", "Who?"]
    },
    {
        question: "<8cm ?",
        options: ["Yes", "No", "I am Asian"]
    }

];

let currentQuestionIndex = 0; // To track the current question
let userAnswers = []; // To store user answers
let questionAnswered = [''];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextbtn');

// Load the first question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ''; // Clear previous options

    // Create radio buttons for options
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('div');
        optionButton.classList.add('option');
        optionButton.innerHTML = `
            <input type="radio" name="option" value="${option}" id="${option}">
            <label for="${option}">${option}</label>
        `;
        optionsElement.appendChild(optionButton); // Append each option to the options container
    });

    // Show the next button
    nextButton.style.display = 'block';
}

// Handle Next Question button click
nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert('Please select an answer!'); // Alert if no option is selected
        return;
    }

    // Store the user's answer
    userAnswers[currentQuestionIndex] = selectedOption.value;
    questionAnswered[currentQuestionIndex] = currentQuestionIndex

    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        displayResults(); // Show results if no more questions
    }
});

// Display results after the quiz is complete
function displayResults() {
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = ''; // Clear options

    // Display user responses
    userAnswers.forEach((answer, index) => {
        const resultItem = document.createElement('div');
        resultItem.textContent = `Q${index + 1}: Your answer: ${answer}`;
        optionsElement.appendChild(resultItem);
    });

    // Optionally provide a status based on responses
    const statusMessage = document.createElement('div');
    const status = evaluateStatus(userAnswers, questionAnswered);
    statusMessage.textContent = `Your Status: ${status}`;
    optionsElement.appendChild(statusMessage);
}

// Example function to evaluate status based on responses
function evaluateStatus(answers, questionAnswered) {
    // Example criteria: this can be customized based on your needs
    if (answers.includes("Yes")) {
        return "Go back to your 'Sigma Male' onlyfans vtuber thot gooner cave";
    } else if (answers.includes("No")) {
        return "Why are you even here? you should be getting 🐱";
    } else if (answers.includes("I am James Charles")) {
        return "You are the literal definition of a fag"
    } else if (userAnswers[1] = "5+ times") {
        return 'Go drink some prime and fucking lunchlys, no way youre getting any 🐱'
    } else {
        return "Average redditor";
    }
}

// Initialize the quiz by loading the first question
loadQuestion();