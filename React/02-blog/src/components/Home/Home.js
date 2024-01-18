import { useEffect, useState } from 'react';
import PostsList from '../PostsList';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Featured posts</h2>
      <p>{posts.length === 0 ? 'No posts' : <PostsList posts={posts.slice(0, 10)} />}</p>
    </>
  );
};

export default Home;
