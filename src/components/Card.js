import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      className="shadow-2xl bg-white container rounded my-2 p-3"
      id={props.postId}
    >
      <Link
        to={`/category/${props.categoryId}/subcategory/${props.subcategoryId}/post/${props.postId}`}
      >
        <h1>
          <span className="underline hover:text-blue-700 hover:bg-RocketMeowth">
            {props.title}
          </span>
        </h1>
      </Link>
      <p>Date: {props.date_created}</p>
      <p>
        Posted under:{" "}
        <Link
          className="text-RocketJames hover:underline"
          to={`/category/${props.categoryId}/subcategory/${props.subcategoryId}`}
        >
          {props.subcategory}
        </Link>{" "}
        in{" "}
        <Link
          className="text-RocketJessie hover:underline"
          to={`/category/${props.categoryId}`}
        >
          {props.category}
        </Link>{" "}
        by{" "}
        <Link className="hover:underline" to={`/profile/${props.authorId}`}>
          {props.author}
        </Link>
      </p>
    </div>
  );
}

export default Card;
