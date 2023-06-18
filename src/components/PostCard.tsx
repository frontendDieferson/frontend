/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Post {
  id: number;
  author: string;
  content: string;
  photo_url: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{post.author}</h3>
      <p>{post.content}</p>
      {post.photo_url && <img src={post.photo_url} alt="Foto" className="mt-4" />}
    </div>
  );
};

export default PostCard;
