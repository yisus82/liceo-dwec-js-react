import Message from '../Message';
import Title from '../Title';
import './Header.css';

const Header = ({ turn, winner }) => {
  let text;
  if (winner === 1) {
    text = 'The winner is Player 1 (X)';
  } else if (winner === 2) {
    text = 'The winner is Player 2 (O)';
  } else if (winner === 0) {
    text = 'The game was a draw';
  } else {
    text = turn === 1 ? 'Player 1 (X)' : 'Player 2 (O)';
  }
  return <>
    <Title />
    <Message text={text} />
  </>;
};

export default Header;