import { Winner } from '../../types';
import './Message.css';

type MessageProps = {
  turn: string;
  winner: Winner;
};

const Message = ({ turn, winner }: MessageProps) => {
  const message = winner === Winner.NONE ? `Turn: ${turn}` : `Winner: ${winner}`;

  return <p id='message'>{message}</p>;
};

export default Message;
