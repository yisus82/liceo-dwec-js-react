import React from 'react';
import { Link } from 'react-router-dom';
import "./PostsListItem.css";

const PostsListItem = ({ post }) => <div className="postLink"><Link to={`/posts/${post.id}`}>{post.title}</Link></div>;

export default PostsListItem;