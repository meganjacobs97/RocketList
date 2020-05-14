import React from "react";

function PostCard(props) {
  return <div className="border-2 border-RocketBlack container rounded" loading="lazy">
    {props.posts.map(post => {
      return <div className="border-2 border-RocketJames container rounded">
        <h1>Title: {post.post.title}</h1>
        <p>Body: {post.post.body}</p>
        <p>Date: {post.post.date_created}</p>
        <p>Posted under: {post.post.subcategory.name} in {post.post.subcategory.category.name} by {post.post.author.username}</p>
        </div>
    })}
  </div>;
}

export default PostCard;
