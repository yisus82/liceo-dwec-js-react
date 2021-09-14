import React, { useEffect, useState } from 'react';
import PostsList from '../PostsList';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then(data => setPosts(data));
  }, []);

  return <>
    <h2>Featured posts</h2>
    <PostsList posts={posts.slice(0, 10)} />
  </>;
};

export default Home;