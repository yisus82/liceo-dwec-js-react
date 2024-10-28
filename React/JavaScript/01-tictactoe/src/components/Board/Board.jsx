import BoardButton from '../BoardButton';
import './Board.css';

const Board = ({ board, onBoardButtonClick }) => <div id="board">
  {board.map((row, rowIndex) =>
    row.map((column, columnIndex) =>
      <BoardButton key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} value={column} onClick={onBoardButtonClick} />))}
</div>;

export default Board;