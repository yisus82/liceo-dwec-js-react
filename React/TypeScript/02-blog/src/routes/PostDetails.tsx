import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { PostResponse } from '../types';

const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await response.json();
  return { post, postId: params.postId };
};

const PostDetailsPage = () => {
  const { post, postId } = useLoaderData() as { post: PostResponse; postId: number };

  if (post && Object.keys(post).length === 0 && Object.getPrototypeOf(post) === Object.prototype) {
    return <h2>There is no post with id: {postId}</h2>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

PostDetailsPage.loader = loader;

export default PostDetailsPage;
