import React from "react";

function Card(props) {
  return (
    <div className="border-2 border-RocketJames container rounded my-2" id={props.postId}>
      <a href={ `/post/${props.postId}` }><h1 text-2xl>Title: {props.title}</h1></a>
      <p>Date: {props.date_created}</p>
      <p>
        Posted under: {props.subcategory} in {props.category} by {props.author}
      </p>
    </div>
  );
}

export default Card;