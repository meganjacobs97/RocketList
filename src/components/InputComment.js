import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";

const ADD_REPLY = gql`
  mutation AddReply(
    $body: String, 
    $postId: String, 
    $categoryId: String) {

    createReply(
      replyInput: {
        body: $body
        postId: $postId
        categoryId: $categoryId
        authorId: "5ec442336c4c103a6c223157"
      }
    ) {
      author {
        username
      }
      body
      date_created
      _id
      category{
        _id
      }
      post{
        _id
      }
    }
  }
`;

function InputComment(props) {
  const [addComment, { data }] = useMutation(ADD_REPLY);
  const ParentCategory = props.categoryId;
  const ParentPost = props.postId;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addComment({
          variables: {
            body: e.target.commentBody.value,
            postId: ParentPost,
            categoryID: ParentCategory,
            // authorId: ,
          },
        });
        e.target.commentBody.value = "";
      }}
    >
      <input
        name="commentBody"
        type="text"
        placeholder="Comment"
        className="w-11/12 border border-black rounded"
      />
      <button
        type="submit"
        className="w-1/12 bg-RocketRed hover:bg-red-900 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default InputComment;
