import { Link } from 'react-router-dom';
import './ListItem.css';

export type ListItemType = {
  link: string;
  text: string;
};

type ListItemProps = {
  item: ListItemType;
};

const ListItem = ({ item }: ListItemProps) => {
  return (
    <div className='link'>
      <Link to={item.link}>{item.text}</Link>
    </div>
  );
};

export default ListItem;
