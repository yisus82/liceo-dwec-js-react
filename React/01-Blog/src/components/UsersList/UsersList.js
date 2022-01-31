import UsersListItem from '../UsersListItem';
import './UsersList.css';

const UsersList = ({ users = [] }) => {
  return (
    <div className='users'>
      {users.map(user => (
        <UsersListItem key={`user-${user.id}`} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
