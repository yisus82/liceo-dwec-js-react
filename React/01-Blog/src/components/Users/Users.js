import { useEffect, useState } from 'react';
import UsersList from '../UsersList';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Users</h2>
      <div>{users.length === 0 ? <p>No users</p> : <UsersList users={users} />}</div>
    </>
  );
};

export default Users;
