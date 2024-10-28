import BlankImage from "../../assets/img/blank.png";
import Player2Image from "../../assets/img/circle.png";
import Player1Image from "../../assets/img/x.jpg";
import './BoardButton.css';

const BoardButton = ({ row, column, value, onClick }) => <button className="boardButton" type="button" onClick={() => onClick(row, column)}>
  <img src={value === 0 ? BlankImage : value === 1 ? Player1Image : Player2Image} alt="" />
</button>;

export default BoardButton;