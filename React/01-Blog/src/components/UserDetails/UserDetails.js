import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .then(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user && Object.keys(user).length !== 0 ? (
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
  ) : (
    <p>There is no user with id: {userId}.</p>
  );
};

export default UserDetails;
