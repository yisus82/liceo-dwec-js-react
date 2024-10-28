import EmptyImage from '../../assets/images/empty.png';
import Player1Image from '../../assets/images/player1.png';
import Player2Image from '../../assets/images/player2.png';
import { CellValue } from '../../types';
import './Cell.css';

type CellProps = {
  value: CellValue;
  onClick: () => void;
};

const Cell = ({ value, onClick }: CellProps) => {
  const imgSrc =
    value === CellValue.EMPTY
      ? EmptyImage
      : value === CellValue.PLAYER_1
      ? Player1Image
      : Player2Image;

  return (
    <button className='cell' onClick={onClick}>
      <img src={imgSrc} alt={value} />
    </button>
  );
};

export default Cell;
