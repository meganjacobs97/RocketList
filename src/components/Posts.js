import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <div
      className="shadow-2xl bg-white container rounded my-2 p-3"
      id={props.postId}
    >
      <h1>{props.title}</h1>
      <br />
      <p>{props.body}</p>
      <br />
      <p>Date: {props.date_created}</p>
      <p>
        Posted under:{" "}
        <Link
          className="text-RocketJames"
          to={`/category/${props.categoryId}/subcategory/${props.subcategoryId}`}
        >
          {props.subcategory}
        </Link>{" "}
        in{" "}
        <Link
          className="text-RocketJessie"
          to={`/category/${props.categoryId}`}
        >
          {props.category}
        </Link>{" "}
        by{" "}
        <Link className="hover:underline" to={`/profile/${props.authorId}`}>
          {props.author}
        </Link>
      </p>
      <button
        className="underline text-blue-700"
        onClick={() =>
          window.open(
            `https://rocketlist.herokuapp.com/join/${props.postId}`,
            "Join Chat"
          )
        }
      >
        Chat
      </button>
    </div>
  );
}

export default PostCard;
