const questionContainer = document.querySelector(".questions");
const questionTwo = document.querySelector(".questions2");
const questionThree = document.querySelector(".questions3");
const mainContainer = document.querySelector(".main");

let nota = 0;
let message = document.createElement("p");
mainContainer.appendChild(message);
message.className = 'message';

let messageQuestion2 = document.createElement("p");
messageQuestion2.className = 'message';
let messageQuestion3 = document.createElement("p");
messageQuestion3.className = 'message';

const firstButton = document.querySelector(".botaoQuestion");
firstButton.addEventListener("click", handleFirstButtonClick);

function handleFirstButtonClick() {
  const selectedOptionInput = document.querySelector(
    'input[name="option"]:checked'
  );
  if (!selectedOptionInput) {
    message.innerText = "Selecione uma resposta para continuar";
    return;
  }

  let questionValue = selectedOptionInput.value;

  let radioButtons = document.querySelectorAll('input[name="option"]');
  radioButtons.forEach((button) => {
    button.disabled = true;
  });

  if (questionValue !== "currentTarget") {
    selectedOptionInput.parentElement.classList.add("error");
  }

  if (questionValue === "currentTarget") {
    nota += 33;
    selectedOptionInput.parentElement.classList.add("correct");
  }

  firstButton.innerText = "Continuar ⇢";
  firstButton.removeEventListener("click", handleFirstButtonClick);
  firstButton.addEventListener("click", handleSecondButtonClick);
}

function handleSecondButtonClick() {
  const perguntas = document.querySelector(".perguntas");
  questionTwo.classList.remove("hidden");
  mainContainer.classList.add("hidden");
  mainContainer.appendChild(perguntas);

  const buttonQuestion3 = document.querySelector("#botao3");
  mainContainer.innerText = questionTwo;
  buttonQuestion3.classList.remove("hidden");

  questionTwo.appendChild(messageQuestion2);

  buttonQuestion3.addEventListener("click", handleButtonQuestion3Click);
}

function handleButtonQuestion3Click() {
  const questionsTwoInput = document.querySelector(
    "input[name='option2']:checked"
  );
  if (!questionsTwoInput) {
    messageQuestion2.innerText = "Selecione uma resposta para continuar";
    return;
  }

  let question2Value = questionsTwoInput.value;

  let radioButtons = document.querySelectorAll('input[name="option2"]');
  radioButtons.forEach((button) => {
    button.disabled = true;
  });

  if (question2Value !== "addEventListener") {
    questionsTwoInput.parentElement.classList.add("error");
  }

  if (question2Value === "addEventListener") {
    nota += 33;
    questionsTwoInput.parentElement.classList.add("correct");
  }

  const buttonContinue = document.querySelector("#botao3");

  buttonContinue.innerText = "Continuar ⇢";
  buttonContinue.removeEventListener("click", handleButtonQuestion3Click);
  buttonContinue.addEventListener("click", handleButtonFinishClick);
}

function handleButtonFinishClick() {
  const choices = document.querySelector(".opcoes");
  questionThree.classList.remove("hidden");

  questionTwo.classList.add("hidden");
  mainContainer.appendChild(choices);

  const buttonFinish = document.querySelector("#finish");
  buttonFinish.classList.remove("hidden");

  
  questionThree.appendChild(messageQuestion3);

  buttonFinish.addEventListener("click", handleFinalButtonClick);
}

function handleFinalButtonClick() {
  const questionsThreeInput = document.querySelector(
    'input[name="option3"]:checked'
  );
  if (!questionsThreeInput) {
    messageQuestion3.innerText = "Selecione uma resposta para continuar";
    return;
  }

  let question3Value = questionsThreeInput.value;

  let radioButtons = document.querySelectorAll('input[name="option3"]');
  radioButtons.forEach((button) => {
    button.disabled = true;
  });

  if (question3Value !== "opcao4") {
    questionsThreeInput.parentElement.classList.add("error");
  }

  if (question3Value === "opcao4") {
    nota += 34;
    questionsThreeInput.parentElement.classList.add("correct");
  }

  const Finish = document.querySelector("#finish");

  Finish.innerText = 'Continuar ⇢';

  Finish.removeEventListener("click", handleFinalButtonClick);
  Finish.addEventListener("click", () => {
    questionThree.classList.add('hidden');
    
    const result = document.querySelector('.result');
    result.classList.remove('hidden');

    const finale = document.createElement('p');
    finale.className = 'finale';

    result.appendChild(finale);

    finale.innerHTML = `<h2>Quizz - Eventos e Formulários</h2>
    Você finalizou o Quizz! Sua nota final é ${nota}`;

    const tryAgain = document.createElement('button');
    tryAgain.className = 'tryAgain';
    tryAgain.innerText = 'Tentar novamente ⇢';
    
   result.appendChild(tryAgain);
  
   tryAgain.addEventListener('click', () => {
    location.href = 'quizz.html';
   })
  });
}
