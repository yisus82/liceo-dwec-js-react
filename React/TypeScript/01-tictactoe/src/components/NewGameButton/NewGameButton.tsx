import './NewGameButton.css';

type NewGameButtonProps = {
  onClick: () => void;
};

const NewGameButton = ({ onClick }: NewGameButtonProps) => (
  <button id='new' onClick={onClick}>
    New Game
  </button>
);

export default NewGameButton;
