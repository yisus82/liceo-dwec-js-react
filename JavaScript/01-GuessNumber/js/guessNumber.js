const message = document.getElementById('message');
const numberForm = document.getElementById('numberForm');
const userNumberField = document.getElementById('userNumberField');
const submitButton = document.getElementById('submitButton');
const newNumberButton = document.getElementById('newNumberButton');
const attemptList = document.getElementById('attemptList');
const optionButton = document.getElementById('optionButton');
let maxAttempts = 3;
let currentAttempts = 0;
let min = 1;
let max = 10;

const generateRandomNumber = (min = 1, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let randomNumber = generateRandomNumber(min, max);
console.log(randomNumber);

const endGame = () => {
  submitButton.disabled = true;
  newNumberButton.style.display = 'initial';
};

const checkNumber = number => {
  if (number < randomNumber) {
    message.innerHTML = 'Random number is higher';
  } else if (number > randomNumber) {
    message.innerHTML = 'Random number is lower';
  } else {
    message.innerHTML = `Random number guessed correctly in ${currentAttempts} attempt(s)!`;
    endGame();
  }
  if (currentAttempts >= maxAttempts) {
    message.innerHTML = `Random number was ${randomNumber}`;
    endGame();
  }
};

const submitNumber = event => {
  event.preventDefault();
  const userNumber = +userNumberField.value;
  userNumberField.value = '';
  currentAttempts++;
  attemptList.innerHTML += `<li>${userNumber}</li>`;
  checkNumber(userNumber);
};
numberForm.onsubmit = submitNumber;

const generateNewNumber = () => {
  message.innerHTML = '';
  attemptList.innerHTML = '';
  currentAttempts = 0;
  randomNumber = generateRandomNumber(min, max);
  console.log(randomNumber);
  submitButton.disabled = false;
  newNumberButton.style.display = 'none';
};
newNumberButton.onclick = generateNewNumber;

const selectOption = () => {
  const radioBtnEasy = document.getElementById('easy');
  const radioBtnMedium = document.getElementById('medium');
  if (radioBtnEasy.checked) {
    min = 1;
    max = 10;
    maxAttempts = 3;
  } else if (radioBtnMedium.checked) {
    min = 1;
    max = 50;
    maxAttempts = 5;
  }
  generateNewNumber();
};
optionButton.onclick = selectOption;
