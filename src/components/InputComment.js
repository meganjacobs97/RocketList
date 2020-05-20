import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

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
    	authorId: "5ec442336c4c103a6c223157"
      }
    ) {
      title
    }
  }
`;