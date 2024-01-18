import './NewGameButton.css';

const NewGameButton = ({ onClick }) => {
  return <button type="button" id="newGameButton" onClick={onClick}>New Game</button>;
};

export default NewGameButton;