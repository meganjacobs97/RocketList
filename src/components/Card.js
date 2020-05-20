import React from "react";

function Card(props) {
  return (
    <div className="border-2 border-RocketJames container rounded my-2" id={props.postId}>
      <a href={ `/category/${props.categoryId}/subcategory/${props.subcategoryId}/post/${props.postId}` }><h1>Title: <span className="underline hover:text-blue-700 hover:bg-RocketMeowth">{props.title}</span></h1></a>
      <p>Date: {props.date_created}</p>
      <p>
        Posted under: <a className="text-RocketJames" href={`/category/${props.categoryId}/subcategory/${props.subcategoryId}`}>{props.subcategory}</a> in <a className="text-RocketJessie" href={`/category/${props.categoryId}`}>{props.category}</a> by {props.author}
      </p>
    </div>
  );
}

export default Card;