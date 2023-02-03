const quizData = [
  {
    question: "How old is Obama ?",
    a: "23",
    b: "45",
    c: "61",
    d: "56",
    correct: "c",
  },
  {
    question: "What is the Capital City of Switzerland ?",
    a: "Bern",
    b: "Washington DC",
    c: "Paris",
    d: "London",
    correct: "a",
  },
  {
    question: "What is the Largest Country - 17.1 Million Square Kilometers ?",
    a: "China",
    b: "Russia",
    c: "India",
    d: "Brazil",
    correct: "b",
  },
  {
    question: "What Italian Region has the capital Milan?",
    a: "Emilia-Romagna",
    b: "Abruzzo",
    c: "Campania",
    d: "Lombardia",
    correct: "d",
  },
];

const questionEl = document.querySelector("#question-text");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const btn = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const container = document.querySelector(".quiz-header");

let currentQuestion = 0;
let score = 0;
let answer;

function loadQuiz() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.innerHTML = currentQuiz.question;

  a_text.innerHTML = currentQuiz.a;
  b_text.innerHTML = currentQuiz.b;
  c_text.innerHTML = currentQuiz.c;
  d_text.innerHTML = currentQuiz.d;
}

function getSelected() {
  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

btn.addEventListener("click", () => {
  if (getSelected() === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    if (score > 2) {
      container.innerHTML = null;
      btn.innerHTML = `<h2>you won! get yourself a ice cream 🫡 ${score}/${quizData.length}</h2>`;
      btn.disabled = true;
    } else {
      container.innerHTML = null;
      btn.innerHTML = `<h2>you lost! try again 😉 ${score}/${quizData.length}<h2>`;
      btn.disabled = true;
    }
  }
  deselectAns();
});

function deselectAns() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

loadQuiz();
