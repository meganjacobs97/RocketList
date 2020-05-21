import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Account() {
  const urlPath = window.location.pathname;
  const splitUrl = urlPath.split("/");
  const userId = splitUrl[2];
  const [posts, setPosts] = useState({
    postsDisplay: []
  });
  const GET_POSTS_BY_USER_ID = gql`
    query {
      user(id: ${userId}) {
        username
        posts {
          title
        }
        postsByCategory
        numPosts
      }
    }
  `;
  const {
    loading: postsByUserIdLoading,
    error: postsByUserIdError,
    data: postsByUserIdData,
  } = useQuery(GET_POSTS_BY_USER_ID);

  useEffect(() => {
    if (postsByUserIdData) {
      console.log(postsByUserIdData);
      //   let holdingArr = [...posts.postsDisplay];
      //   const subcategoriesQueried = postsByCatData.category.subcategories;
      //   subcategoriesQueried.forEach((subcategory) => {
      //     let subCategId = subcategory._id;
      //     let subCategName = subcategory.name;
      //     subcategory.posts.forEach((post) => {
      //       let item = {};
      //       item.title = post.title;
      //       item.body = post.body;
      //       item.date_created = post.date_created;
      //       item.author = post.author.username;
      //       item.postId = post._id;
      //       item.subCatId = subCategId;
      //       item.subCategory = subCategName;
      //       item.parentId = catid;
      //       item.parentCategory = subCategories.parentCategory;
      //       holdingArr.push(item);
      //     });
      //   });
      //   setPosts({
      //     ...posts,
      //     postsDisplay: holdingArr,
      //   });
    }
  }, [postsByUserIdData]);

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
          <h1 className="text-center font-bold">Welcome usersusername</h1>
          <p>Posts By Category: userspostsByCatergory </p>
          <p>Total Number Of Posts: usersnumPosts </p>
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded px-2">
          {postsByUserIdLoading ? (
            <h1>Loading your posts...</h1>
          ) : (
            <h1>Your Posts</h1>
          )}
          {postsByUserIdLoading ? <Loading /> : ""}
          {posts.postsDisplay.map((post) => (
            <Card
              title={post.title}
              body={post.body}
              date_created={post.date_created}
              author={post.author}
              postId={post.id}
              subcategoryId={post.subCatId}
              subcategory={post.subCategory}
              categoryId={post.parentCatId}
              category={post.parentCategory}
            />
          ))}
        </div>
      </Col>
    </VGrid>
  );
}
export default Account;
