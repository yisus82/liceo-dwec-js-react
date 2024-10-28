import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import NewGameButton from './components/NewGameButton';
import { BoardType, CellValue, Turn, Winner } from './types';

const App = () => {
  const [turn, setTurn] = useState<Turn>(Turn.PLAYER_1);
  const [winner, setWinner] = useState<Winner>(Winner.NONE);
  const [board, setBoard] = useState<CellValue[][]>([
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
  ]);

  const generateRandomTurn = () => (Math.random() < 0.5 ? Turn.PLAYER_1 : Turn.PLAYER_2);

  const changeTurn = () => {
    setTurn(turn === Turn.PLAYER_1 ? Turn.PLAYER_2 : Turn.PLAYER_1);
  };

  const checkValues = (values: CellValue[]) => {
    if (values.every(value => value === CellValue.PLAYER_1)) {
      setWinner(Winner.PLAYER_1);
    } else if (values.every(value => value === CellValue.PLAYER_2)) {
      setWinner(Winner.PLAYER_2);
    }
  };

  const checkWinner = (board: BoardType) => {
    // Check rows
    board.forEach(row => checkValues(row));

    // Check columns
    for (let i = 0; i < 3; i++) {
      checkValues([board[0][i], board[1][i], board[2][i]]);
    }

    // Check diagonals
    checkValues([board[0][0], board[1][1], board[2][2]]);
    checkValues([board[0][2], board[1][1], board[2][0]]);

    // Check draw
    if (winner === Winner.NONE && board.every(row => row.every(cell => cell !== CellValue.EMPTY))) {
      setWinner(Winner.DRAW);
    }
  };

  const clickCell = (row: number, col: number) => {
    if (board[row][col] !== CellValue.EMPTY || winner !== Winner.NONE) {
      return;
    }

    const newBoard = board.map(row => [...row]);
    newBoard[row][col] = turn === Turn.PLAYER_1 ? CellValue.PLAYER_1 : CellValue.PLAYER_2;
    setBoard(newBoard);
    checkWinner(newBoard);
    changeTurn();
  };

  const newGame = () => {
    setBoard([
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
      [CellValue.EMPTY, CellValue.EMPTY, CellValue.EMPTY],
    ]);
    setWinner(Winner.NONE);
    setTurn(generateRandomTurn());
  };

  useEffect(() => {
    setTurn(generateRandomTurn());
  }, []);

  return (
    <>
      <Header turn={turn} winner={winner} />
      <Board board={board} onClick={clickCell} />
      <NewGameButton onClick={newGame} />
    </>
  );
};

export default App;
