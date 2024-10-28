import { CellValue } from '../../types';
import Cell from '../Cell';
import './Board.css';

type BoardProps = {
  board: CellValue[][];
  onClick: (row: number, col: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => (
  <div id='board'>
    {board.map((row, rowIndex) => (
      <div key={rowIndex} className='row'>
        {row.map((cell, cellIndex) => (
          <Cell key={cellIndex} value={cell} onClick={() => onClick(rowIndex, cellIndex)} />
        ))}
      </div>
    ))}
  </div>
);

export default Board;
