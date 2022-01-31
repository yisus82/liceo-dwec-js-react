import PostsListItem from '../PostsListItem';
import './PostsList.css';

const PostsList = ({ posts = [] }) => {
  return (
    <div className='posts'>
      {posts.map(post => (
        <PostsListItem key={`post-${post.id}`} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
