const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function loadQuestion() {
  selectedOptionIndex = null;
  nextBtn.disabled = true;
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectOption(index, button));
    optionsEl.appendChild(button);
  });
}

function selectOption(index, button) {
  selectedOptionIndex = index;
  // Remove selected from all buttons
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  if (selectedOptionIndex === null) return;

  if (selectedOptionIndex === questions[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.classList.add('hidden');
  optionsEl.classList.add('hidden');
  nextBtn.classList.add('hidden');
  
  resultEl.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}.`;
  resultEl.classList.remove('hidden');
}

// Initialize the quiz on page load
loadQuestion();
