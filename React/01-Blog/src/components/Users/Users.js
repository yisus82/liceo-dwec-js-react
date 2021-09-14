import React, { useEffect, useState } from 'react';
import UsersList from '../UsersList/UsersList';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then(data => setUsers(data));
  }, []);

  return <UsersList users={users} />;
};

export default Users;