import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import NewGameButton from './components/NewGameButton';

const App = () => {
  const EMPTY = 0;
  const PLAYER_1 = 1;
  const PLAYER_2 = 2;
  const DRAW = 0;
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [board, setBoard] = useState(Array(rows).fill().map(() => Array(columns).fill(EMPTY)));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(PLAYER_1);
  const [positionsLeft, setPositionsLeft] = useState(rows * columns);

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
    return turn;
  } else if (positionsLeft === 1) {
    return DRAW;
  }
  return null;
};

  const onBoardButtonClick = (row, column) => {
    if (board[row][column] !== EMPTY) {
      return;
    }

    if (winner !== null) {
      return;
    }

    board[row][column] = turn;
    setBoard(board);
    setPositionsLeft(positionsLeft - 1);
    setWinner(checkWinner());
    setTurn(turn === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  };

  const newGame = () => {
    setBoard(Array(rows).fill().map(() => Array(columns).fill(EMPTY)));
    setWinner(null);
    setTurn(generateRandomNumber(PLAYER_1, PLAYER_2));
    setPositionsLeft(rows * columns);
  };

  useEffect(
    () => setTurn(generateRandomNumber(PLAYER_1, PLAYER_2)),
    []
  );

  return <>
    <Header turn={turn} winner={winner} />
    <Board board={board} onBoardButtonClick={onBoardButtonClick} />
    <NewGameButton onClick={newGame} />
  </>;
};

export default App;
