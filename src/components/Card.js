import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      className="border-2 border-RocketJames container rounded my-2 shadow-md px-2 py-1"
      id={props.postId}
    >
      <Link
        to={`/category/${props.categoryId}/subcategory/${props.subcategoryId}/post/${props.postId}`}
      >
        <h1>
          Title:{" "}
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
        by{" "} <Link className="hover:underline" to={`/profile/${props.authorId}`}>{props.author}</Link>
      </p>
    </div>
  );
}

export default Card;
