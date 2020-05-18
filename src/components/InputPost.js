import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_POST = gql`
  mutation AddPost($type: Post) {
    createPost(
      postInput: {
        title: $title
        body: $body
        subcategory: $subcategory
        category: $category
        author: "5ec2b5b1664bd0451c6468d4"
      }
    )
  }
`;

function InputPost(props) {
  let input;
  const [addPost, { data }] = useMutation(ADD_POST);
  const subCat = props.list;
  const ParentCategory = props.subcategory.category.id;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPost({
          variables: {
            title: input.postTitle,
            body: input.postBody,
            subcategory: input.subcategory.id,
            category: ParentCategory,
          },
        });
        input.value = "";
      }}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-RocketRed"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="postTitle">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          name="postTitle"
          type="text"
          placeholder="What is the proble with todays youths"
        />
      </div>
      <label className="block text-sm font-bold mb-2">
        <span className="border-solid border-RocketBlack">Post Body</span>
        <textarea
          className="form-textarea mt-1 block w-full shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
          name="postBody"
          placeholder="Damn youthes today flicked me off while driving."
        ></textarea>
      </label>
      <br></br>
      <div className="flex items-center justify-between">
        <label className="block">
          <span className="text-sm font-bold mb-2">Subcategory</span>
          <select className="form-select block w-full mt-1">
            {subCat.map((subcategory) => {
              return (
                <option id={subcategory.id} name="subcategory">
                  {subcategory.name}
                </option>
              );
            })}
          </select>
        </label>
        <div className="block">
          <span className="text-sm font-bold mb-2">Post Type</span>
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="1"
                />
                <span className="ml-2">Discussion</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="2"
                />
                <span className="ml-2">Help</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="radio"
                  value="3"
                />
                <span className="ml-2">Question</span>
              </label>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default InputPost;
