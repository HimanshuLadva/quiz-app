const mcqData = [
  {
    question: " Which one of the following is a form element?",
    a: "text box",
    b: "radio button",
    c: "submit button",
    d: "All of these",
    answer: "d",
  },
  {
    question: "Which one of the following is incorrect?",
    a: "<label> tag in HTML is used for creating a tag for form elements.",
    b: "<label> can be used to increase the clickable area of buttons",
    c: "id attribute is used with <label> to increase the clickable area of form elements",
    d: "None of the above",
    answer: "c",
  },
  {
    question: "Which of the following tag is used for drop down list?",
    a: "<select>",
    b: "<text>",
    c: "<textarea>",
    d: "<dropdown>",
    answer: "a",
  },
  {
    question: "By which tag, an unordered list is represented?",
    a: "<u>",
    b: "<I>",
    c: "<ul>",
    d: "<ol>",
    answer: "c",
  },
  {
    question: "What is the default item marker in unordered lists of HTML?",
    a: "Circle",
    b: "Marker",
    c: "disc",
    d: "None of the above",
    answer: "c",
  },
  {
    question: "What is HTML",
    a: "markup language",
    b: "programming language",
    c: "not a language",
    d: "none of these",
    answer: "a",
  },
];

const questionE = document.getElementById("question");
const quiz = document.getElementById("quiz");
const buttonbtn = document.getElementById("button");
const texta = document.getElementById("text_a");
const textb = document.getElementById("text_b");
const textc = document.getElementById("text_c");
const textd = document.getElementById("text_d");

let currentQuestion = 0;

function loadQuiz() {
  const answerEl = document.querySelectorAll(".answer");
  answerEl.forEach((answerE) => {
    if (answerE.checked) {
      answerE.checked = false;
    }
  });

  const currentQuiz = mcqData[currentQuestion];
  questionE.innerHTML = currentQuiz.question;

  texta.innerText = currentQuiz.a;
  textb.innerText = currentQuiz.b;
  textc.innerText = currentQuiz.c;
  textd.innerText = currentQuiz.d;
}

loadQuiz();

// setInterval(loadQuiz, 5000);
let score = 0;
function getSelected() {
  const answerEl = document.querySelectorAll(".answer");
  let answer = undefined;
  answerEl.forEach((answerE) => {
    if (answerE.checked) {
      answer = answerE.id;
    }
  });
  return answer;
}

buttonbtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log("hello  " + answer);
  if (answer) {
    if (answer === mcqData[currentQuestion].answer) {
      score++;
    }
    console.log(score);
    currentQuestion++;
    if (currentQuestion < mcqData.length) {
      loadQuiz();
    } else {
      alert("you finish your quiz!!!");

      quiz.innerHTML = `
        <p>Your Score:</p>
        <h2>${score}</h2>
        <h5>you give answer ${score} out of ${mcqData.length}</h5>
        <button onclick="location.reload()">Reload</button>
    `;
      quiz.classList.toggle("result");
    }
  }
});

function select(e) {
  document.getElementById(e).checked = true;
}
