import React from 'react';
import UsersListItem from '../UsersListItem';
import './UsersList.css';

const UsersList = ({ users }) => users.map((user) => <UsersListItem key={`user-${user.id}`} user={user} />);

export default UsersList;