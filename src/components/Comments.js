import React from "react";

function Comments(props) {
  return (
    <div className="border-2 border-RocketJames container rounded my-2" id={props.postId}>
      <p>{props.username}:</p>
      <p>{props.body}</p>
      <p>{props.date_created}</p>
    </div>
  );
}

export default Comments;