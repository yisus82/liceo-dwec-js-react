import React, { useEffect, useState } from 'react';
import useQuery from '../../hooks/useQuery';
import PostsList from '../PostsList';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const query = useQuery();
  const userId = +query.get("userId");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then(data => setPosts(data));
  }, []);

  return <>
    <h2>Posts</h2>
    <div className="posts">
      <PostsList posts={userId ? posts.filter(post => post.userId === userId) : posts} />
    </div>
  </>;
};

export default Posts;