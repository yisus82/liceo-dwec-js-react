import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { UserResponse } from '../types';

const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const user = await response.json();
  return { user, userId: params.userId };
};

const UserDetailsPage = () => {
  const { user, userId } = useLoaderData() as { user: UserResponse; userId: number };

  if (user && Object.keys(user).length === 0 && Object.getPrototypeOf(user) === Object.prototype) {
    return <h2>There is no user with id: {userId}</h2>;
  }

  return (
    <div>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Website: </strong>
        {user.website}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <Link to={`/posts?userId=${user.id}`}>View user posts</Link>
      </p>
    </div>
  );
};

UserDetailsPage.loader = loader;

export default UserDetailsPage;
