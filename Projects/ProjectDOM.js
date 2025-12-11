const quizContainer = document.getElementById("quiz-Container");
const questionContainer = document.getElementById("question-Container");
const optionsContainer = document.getElementById("options-Container");
const nextButtons = document.getElementById("next-Button");
const scoreContainer = document.getElementById("score-Container");
const restartButton = document.getElementById("restart-Button");

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
];

function loadQuestion() {
  const currentQuestion = quizData[currentQuestion];
  questionContainer.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("optionButton");
    button.innerText = option;
    button.addEventListener("click", () => selectOption(option));
    optionsContainer.appendChild(button);
  });
}

function selectOption(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  scoreContainer.innerText = `Your score: ${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
}

nextButtons.addEventListener("click", loadQuestion);
restartButton.addEventListener("click", restartQuiz);

// Initialize the quiz
loadQuestion();
