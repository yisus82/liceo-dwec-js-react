import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => setUser(user))
      .then(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (
    user &&
    Object.keys(user).length === 0 &&
    Object.getPrototypeOf(user) === Object.prototype
  ) {
    return <h2>There is no user with id: {userId}</h2>;
  }

  return (
    <div className='userDetails'>
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

export default UserDetails;
