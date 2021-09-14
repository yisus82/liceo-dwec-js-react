const DRAW = 0;
const EMPTY = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;
let positionsLeft = 9;
let playerTurn = 0;
let winner = null;
let board = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
];

const generateRandomNumber = (min = 1, max = 2) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

playerTurn = generateRandomNumber();

const playerTurnText = document.getElementById('playerTurnText');
playerTurnText.innerHTML = playerTurn === PLAYER_ONE ? 'Player 1 (X)' : 'Player 2 (O)';

const changeTurn = () => {
  playerTurn = playerTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
  playerTurnText.innerHTML = playerTurn === PLAYER_ONE ? 'Player 1 (X)' : 'Player 2 (O)';
};

const clickImage = event => {
  const [, row, column] = event.currentTarget.id.split('_');
  if (winner !== null || board[row - 1][column - 1] !== EMPTY) {
    return;
  }
  event.currentTarget.src = playerTurn === PLAYER_ONE ? './img/x.jpg' : './img/circle.png';
  board[row - 1][column - 1] = playerTurn;
  positionsLeft--;
  winner = checkWinner();
  if (winner !== null) {
    playerTurnText.innerHTML =
      winner === PLAYER_ONE
        ? 'The winner is Player 1'
        : winner === PLAYER_TWO
        ? 'The winner is Player 2'
        : 'The game was a draw';
  } else {
    changeTurn();
  }
};

const images = document.getElementsByTagName('img');
Array.from(images).forEach(image => (image.onclick = clickImage));

const newGameClick = () => {
  board = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ];
  playerTurn = generateRandomNumber();
  playerTurnText.innerHTML = playerTurn === PLAYER_ONE ? 'Player 1 (X)' : 'Player 2 (O)';
  winner = null;
  positionsLeft = 9;
  Array.from(images).forEach(image => (image.src = './img/blank.png'));
};

const newGameBtn = document.getElementById('newGameBtn');
newGameBtn.onclick = newGameClick;

const checkWinner = () => {
  if (
    (board[0][0] !== EMPTY && board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
    (board[1][0] !== EMPTY && board[1][0] === board[1][1] && board[1][0] === board[1][2]) ||
    (board[2][0] !== EMPTY && board[2][0] === board[2][1] && board[2][0] === board[2][2]) ||
    (board[0][0] !== EMPTY && board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
    (board[0][1] !== EMPTY && board[0][1] === board[1][1] && board[0][1] === board[2][1]) ||
    (board[0][2] !== EMPTY && board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
    (board[0][0] !== EMPTY && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[0][2] !== EMPTY && board[0][2] === board[1][1] && board[0][2] === board[2][0])
  ) {
    return playerTurn;
  } else if (positionsLeft === 0) {
    return DRAW;
  }
  return null;
};
