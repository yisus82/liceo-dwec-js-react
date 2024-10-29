import ListItem from '../ListItem';
import { ListItemType } from '../ListItem/ListItem';
import './List.css';

type ListProps = {
  items: ListItemType[];
};

const List = ({ items }: ListProps) => {
  return (
    <div className='items'>
      {items.map((item, index) => (
        <ListItem key={`item-${index}`} item={item} />
      ))}
    </div>
  );
};

export default List;
