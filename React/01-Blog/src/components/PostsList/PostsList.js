import React from 'react';
import PostsListItem from '../PostsListItem';
import "./PostsList.css";

const PostsList = ({ posts }) => posts.map(post => <PostsListItem key={`post-${post.id}`} post={post} />);

export default PostsList;