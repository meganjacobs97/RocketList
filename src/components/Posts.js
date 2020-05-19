import React from "react";

function PostCard(props) {
  return (
    <div className="border-2 border-RocketJames container rounded my-2" id={props.postId}>
      <h1>Title: {props.title}</h1>
      <p>Body: {props.body}</p>
      <p>Date: {props.date_created}</p>
      <p>
        Posted under: <a className="text-RocketJames" href={`/category/${props.categoryId}/subcategory/${props.subcategoryId}`}>{props.subcategory}</a> in <a className="text-RocketJessie" href={`/category/${props.categoryId}`}>{props.category}</a> by {props.author}
      </p>
      <a href={ `/join/${props.postId}` }><button className="underline text-blue-700">Chat</button></a>
    </div>
  );
}

export default PostCard;