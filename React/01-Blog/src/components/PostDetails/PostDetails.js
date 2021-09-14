import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .then(() => setLoading(false));
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return post && Object.keys(post).length !== 0 ? (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  ) : (
    <p>There is no post with id: {postId}.</p>
  );
};

export default PostDetails;
