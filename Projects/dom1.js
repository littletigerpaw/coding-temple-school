const quizcontainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result-container");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
];

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  quizcontainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul class="choices">
      ${currentQuestion.choices
        .map(
          (choice) =>
            `<li>
            <label>
              <input type="radio" name="choice" value="${choice}">
              ${choice}
            </label>
          </li>`
        )
        .join("")}
    </ul>
  `;

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="choice"]:checked');
  if (!selectedOption) {
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
    {
      alert("Please select an answer before proceeding.");
    }
  }
}

function showResult() {
  quizcontainer.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

nextBtn.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", checkAnswer);

showQuestion();
