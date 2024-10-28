import { Link } from 'react-router-dom';
import './UsersListItem.css';

const UsersListItem = ({ user = {} }) => {
  return (
    <div className='userLink'>
      <Link to={`/users/${user.id}`}>
        {user.name}({user.email})
      </Link>
    </div>
  );
};

export default UsersListItem;
