import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => setPost(post))
      .then(() => setLoading(false));
  }, [postId]);

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (
    post &&
    Object.keys(post).length === 0 &&
    Object.getPrototypeOf(post) === Object.prototype
  ) {
    return <h2>There is no post with id: {postId}</h2>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetails;
