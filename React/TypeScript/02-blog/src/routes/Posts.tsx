import { LoaderFunction, useLoaderData } from 'react-router-dom';
import List from '../components/List/List';
import { PostResponse } from '../types';

const loader: LoaderFunction = async ({ request }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const searchParams = new URL(request.url).searchParams;
  const userId = searchParams.get('userId');
  if (userId) {
    return posts.filter((post: PostResponse) => post.userId === +userId);
  }
  return posts;
};

const PostsPage = () => {
  const posts = useLoaderData() as PostResponse[];

  return (
    <>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p className='no-items'>No posts</p>
      ) : (
        <List items={posts.map(post => ({ link: `/posts/${post.id}`, text: post.title }))} />
      )}
    </>
  );
};

PostsPage.loader = loader;

export default PostsPage;
