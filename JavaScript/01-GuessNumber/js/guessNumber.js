const result = document.getElementById('result');
const numberForm = document.getElementById('numberForm');
const userNumberField = document.getElementById('userNumberField');
const submitButton = document.getElementById('submitButton');
const newButton = document.getElementById('newButton');
const attemptList = document.getElementById('attemptList');
const optionButton = document.getElementById('optionButton');
let maxAttempts = 3;
let numAttempts = 0;
let min = 1;
let max = 10;

const generateRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = generateRandomNumber(min, max);
console.log(randomNumber);

const submitNumber = event => {
  event.preventDefault();
  const userNumber = +userNumberField.value;
  numAttempts++;
  attemptList.innerHTML += `<li>${userNumber}</li>`;
  if (userNumber < randomNumber) {
    result.innerHTML = "Random number is higher";
  } else if (userNumber > randomNumber) {
    result.innerHTML = "Random number is lower";
  } else {
    result.innerHTML = `Random number guessed correctly in ${numAttempts} attempt(s)!`;
    submitButton.disabled = true;
    newButton.style.display = "initial";
  }
  if (numAttempts === maxAttempts) {
    submitButton.disabled = true;
    newButton.style.display = "initial";
    result.innerHTML = `Random number was ${randomNumber}`;
  }
};

numberForm.onsubmit = submitNumber;

const generateNewNumber = () => {
  result.innerHTML = "";
  attemptList.innerHTML = "";
  numAttempts = 0;
  randomNumber = generateRandomNumber(min, max);
  console.log(randomNumber);
  submitButton.disabled = false;
  newButton.style.display = "none";
};

newButton.onclick = generateNewNumber;

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