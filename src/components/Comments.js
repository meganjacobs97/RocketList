import React from "react";

function Comments(props) {

  return (
    <div className="border-2 border-RocketJessie container rounded my-2" id={props.postId}>
      <p className="text-lg">{props.author}: {props.body}</p>
      <p className="text-xs text-grat-300">{props.date_created}</p>
    </div>
  );
}

export default Comments;