import React from "react";

function PostCard(props) {
  return (
    <div className="border-2 border-RocketJames container rounded my-2" id={props.postId}>
      <h1>Title: {props.title}</h1>
      <p>Body: {props.body}</p>
      <p>Date: {props.date_created}</p>
      <p>
        Posted under: {props.subcategory} in {props.category} by {props.author}
      </p>
      <a href={ `/join/${props.postId}` }><button className="underline text-blue-700">Chat</button></a>
    </div>
  );
}
// </div>;
// }

export default PostCard;
