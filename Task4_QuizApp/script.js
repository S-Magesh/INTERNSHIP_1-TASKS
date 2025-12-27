const quizData = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax",
      "Control Style Sheet"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["&lt;h1&gt;", "&lt;a&gt;", "&lt;p&gt;", "&lt;link&gt;"],
    answer: "<a>"
  }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";
  currentQuiz.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" id="${option}" name="option" value="${option}">
      <label for="${option}">${option}</label>
    `;
    optionsEl.appendChild(li);
  });
}

function getSelected() {
  const options = document.querySelectorAll("input[name='option']");
  let selected = null;
  options.forEach(option => {
    if (option.checked) selected = option.value;
  });
  return selected;
}

nextBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed 🎉</h2>
      <p class="score">Your Score: ${score} / ${quizData.length}</p>
    `;
  }
});

loadQuestion();
