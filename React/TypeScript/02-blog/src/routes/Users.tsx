import { LoaderFunction, useLoaderData } from 'react-router-dom';
import List from '../components/List/List';
import { UserResponse } from '../types';

const loader: LoaderFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};

const UsersPage = () => {
  const users = useLoaderData() as UserResponse[];

  return (
    <>
      <h2>Users</h2>
      {users.length === 0 ? (
        <p className='no-items'>No users</p>
      ) : (
        <List
          items={users.map(user => ({
            link: `/users/${user.id}`,
            text: `${user.name} (${user.email})`,
          }))}
        />
      )}
    </>
  );
};

UsersPage.loader = loader;

export default UsersPage;
