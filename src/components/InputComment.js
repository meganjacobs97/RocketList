import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const ADD_REPLY = gql`
  mutation AddReply(
    $body: String
    $postId: String
    $categoryId: String
    $authorId: String
  ) {
    createReply(
      replyInput: {
        body: $body
        postId: $postId
        categoryId: $categoryId
        authorId: $authorId
      }
    ) {
      author {
        username
      }
      body
      date_created
      _id
      category {
        _id
      }
      post {
        _id
      }
    }
  }
`;

function InputComment(props) {
  const [addComment, { data }] = useMutation(ADD_REPLY);
  const ParentCategory = props.categoryId;
  const ParentPost = props.postId;
  ///get user id by checking token and comparing it to db
  const userToken = JSON.parse(localStorage.getItem("token"));
  const GET_CURRENT_USER = gql`
  query {
    currentUser(token: "${userToken}") {
        _id
        username
      }
  }
`;

  // Queries database to get user info based on logged in user (token)
  const {
    loading: currUserLoading,
    error: currUserError,
    data: currUserData,
  } = useQuery(GET_CURRENT_USER);

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        addComment({
          variables: {
            body: e.target.commentBody.value,
            postId: ParentPost,
            categoryID: ParentCategory,
            authorId: currUserData.currentUser._id,
          },
        });
        e.target.commentBody.value = "";
      }}
    >
      <input
        name="commentBody"
        type="text"
        placeholder="Comment"
        className="border border-black rounded"
      />
      <button
        type="submit"
        className="bg-RocketRed hover:bg-red-900 rounded px-1"
      >
        Submit
      </button>
    </form>
  );
}

export default InputComment;
