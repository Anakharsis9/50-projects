const questionText = document.querySelector(".card__question-text");
const cardOptions = document.querySelector(".card__options");

const btn = document.querySelector(".btn");

getQuiz().then((data) => {
  let quiz = data;
  updateQuestionCard(quiz[0]);

  let questionsCount = quiz.length;
  let correctAnswersCount = 0;

  let currentQuestion = quiz[0];
  let i = 1;

  btn.onclick = () => {
    const receivedAnswer = getCheckedId();

    if (!receivedAnswer) return;

    if (checkAnswer(currentQuestion["correct_answers"], receivedAnswer)) {
      correctAnswersCount++;
    }

    if (i < questionsCount) {
      currentQuestion = quiz[i++];
      deleteOptions();
      updateQuestionCard(currentQuestion);
    } else {
      deleteOptions();
      questionText.innerHTML = `You answered ${correctAnswersCount}/${questionsCount} questions correctly`;
      btn.innerHTML = "Reload";
      btn.onclick = () => {
        document.location.reload();
      };
    }
  };
});

async function getQuiz() {
  const URL = "https://quizapi.io/api/v1/questions";
  const API_KEY = "4Db8plMbU6rnbYbDe0w3MlTwxQSX4mWDH8oInTo3";
  const category = "linux";
  const limit = "5";
  const difficulty = "easy";

  const response = await fetch(
    URL +
      `?apiKey=${API_KEY}&limit=${limit}&category=${category}&difficulty=${difficulty}`
  );

  const quizData = await response.json();

  return quizData;
}

function updateQuestionCard(question) {
  questionText.innerHTML = question.question;

  for (const key in question.answers) {
    if (!question.answers[key]) continue;

    cardOptions.appendChild(createOption(key, question.answers[key]));
  }
}

function createOption(inputId, labelText) {
  const wrapper = document.createElement("div");
  wrapper.className = "card__option-wrapper";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "option";
  input.className = "card__option-input";
  input.id = inputId;

  const label = document.createElement("label");
  label.className = "card__option-label";
  label.htmlFor = inputId;
  label.innerText = labelText;

  wrapper.append(input, label);

  return wrapper;
}

function getCheckedId() {
  const optionInputs = document.querySelectorAll(".card__option-input");
  return [...optionInputs].find((option) => option.checked)?.id;
}

function deleteOptions() {
  cardOptions.innerHTML = "";
}

function findCorrect(answers) {
  for (const key in answers) {
    if (answers[key] === "true") return key;
  }

  return null;
}

function checkAnswer(answers, answer) {
  return findCorrect(answers).includes(answer);
}
