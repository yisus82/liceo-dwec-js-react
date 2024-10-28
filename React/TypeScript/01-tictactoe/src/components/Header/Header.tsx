import { Winner } from '../../types';
import Message from '../Message';
import Title from '../Title';
import './Header.css';

type HeaderProps = {
  turn: string;
  winner: Winner;
};

const Header = ({ turn, winner }: HeaderProps) => (
  <>
    <Title />
    <Message turn={turn} winner={winner} />
  </>
);

export default Header;
