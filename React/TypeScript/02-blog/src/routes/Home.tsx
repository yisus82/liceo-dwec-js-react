import { LoaderFunction, useLoaderData } from 'react-router-dom';
import List from '../components/List/List';
import { PostResponse } from '../types';

const loader: LoaderFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts.slice(0, 10);
};

const HomePage = () => {
  const posts = useLoaderData() as PostResponse[];

  return (
    <>
      <h2>Featured posts</h2>
      {posts.length === 0 ? (
        <p className='no-items'>No posts</p>
      ) : (
        <List items={posts.map(post => ({ link: `/posts/${post.id}`, text: post.title }))} />
      )}
    </>
  );
};

HomePage.loader = loader;

export default HomePage;
