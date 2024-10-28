import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostsList from '../PostsList';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const userId = +searchParams.get('userId');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(userId ? posts.filter(post => post.userId === userId) : posts))
      .then(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Posts</h2>
      <div>{posts.length === 0 ? <p>No posts</p> : <PostsList posts={posts} />}</div>
    </>
  );
};

export default Posts;
