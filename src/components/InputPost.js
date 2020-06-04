import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { Make_Post } from "../actions";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@apollo/react-hooks";

const ADD_POST = gql`
  mutation AddPost(
    $title: String
    $body: String
    $subcategory: String
    $category: String
    $author: String
  ) {
    createPost(
      postInput: {
        title: $title
        body: $body
        subcategoryId: $subcategory
        categoryId: $category
        authorId: $author
      }
    ) {
      title
    }
  }
`;

function InputPost(props) {
  const dispatch = useDispatch();
  //get user id out of local storage
  const userId = JSON.parse(localStorage.getItem("userId"));
  //get user id by checking token and comparing it to db
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

  const subCat = props.list;
  // console.log(subCat);
  const [dropDownValue, setDropDownValue] = useState("");
  useEffect(() => {
    if (props.list.length > 0) {
      setDropDownValue(props.list[0].id);
    }
  }, [props.list]);
  function handleChange(e) {
    setDropDownValue(e.target.value);
  }

  let input;
  const [addPost, { data }] = useMutation(ADD_POST);
  // console.log(subCat);
  const ParentCategory = props.category;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPost({
          variables: {
            title: e.target.postTitle.value,
            body: e.target.postBody.value,
            subcategory: dropDownValue,
            category: ParentCategory,
            author: currUserData.currentUser._id,
          },
        });
        e.target.postTitle.value = "";
        e.target.postBody.value = "";
        {
          dispatch(Make_Post());
          alert("Post Submitted Successfully");
        }
      }}
      className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="postTitle">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          name="postTitle"
          type="text"
          placeholder="Title"
        />
      </div>
      <label className="block text-sm font-bold mb-2">
        <span className="border-solid border-RocketBlack">Post Body</span>
        <textarea
          className="form-textarea mt-1 block w-full shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
          name="postBody"
          placeholder="Body"
        ></textarea>
      </label>
      <br></br>
      <div className="flex items-center justify-between">
        <label className="block">
          <span className="text-sm font-bold mb-2">Subcategory</span>
          <select
            onChange={handleChange}
            value={dropDownValue}
            className="form-select block w-full mt-1 border-2 rounded border-RocketSteel"
          >
            {subCat.map((subcategory) => {
              console.log(subcategory);
              return (
                <option value={subcategory.id} key={subcategory.id} name="subcategory">
                  {subcategory.name}
                </option>
              );
            })}
          </select>
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-RocketJessie text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => dispatch(Make_Post())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default InputPost;
