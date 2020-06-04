import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <div
      className="shadow-2xl bg-white container rounded my-2 p-3"
      id={props.postId}
    >
      <h1 className="text-lg font-bold">{props.title}</h1>
      <br />
      <p>{props.body}</p>
      <br />
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
      <p>{props.date_created}</p>
      <button
        className="hover:underline text-blue-700"
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
