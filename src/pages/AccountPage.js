import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import Card from "../components/Card";
import Loading from "../components/Loading";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";

function Account() {
  const urlPath = window.location.pathname;
  const splitUrl = urlPath.split("/");
  const userId = splitUrl[2];
  const [posts, setPosts] = useState({
    postsDisplay: [],
  });
  const [user, setUser] = useState({
    username: "",
    id: "",
    totalPosts: "",
  });
  const [topCategories, setTopCategories] = useState({
    topCategories: [],
    title: "",
  });
  const [allCategories, setAllCategories] = useState({
    allCategories: [],
    title: "",
  });
  const GET_ALLCATS = gql`
    query {
      categories {
        name
        _id
      }
    }
  `;
  const GET_POSTS_BY_USER_ID = gql`
  query {
    user(id: "${userId}") {
      username 
      _id
      posts {
        subcategory {
          _id
          name
          category {
            _id
            name
          }
        }
        title
        date_created
        _id
      }
      postsByCategory {
      category{
       name
     }
     }
    }
    }
    `;
  // const GET_POSTS_BY_USER = gql`
  //   query {
  //     postsByUser(userId: "${userId}") {
  //       category {
  //         name
  //       }
  //       posts
  //     }
  //   }
  // `;

  // Queries database to get all categories
  const {
    loading: allCatLoading,
    error: allCatError,
    data: allCatData,
  } = useQuery(GET_ALLCATS);
  // Queries database to get top categories (placeholder)
  const {
    loading: topCatLoading,
    error: topCatError,
    data: topCatData,
  } = useQuery(GET_ALLCATS);

  const {
    loading: postsByUserIdLoading,
    error: postsByUserIdError,
    data: postsByUserIdData,
  } = useQuery(GET_POSTS_BY_USER_ID);

  console.log(postsByUserIdData);

  // const {
  //   loading: postsByUserLoading,
  //   error: postsByUserError,
  //   data: postsByUserData,
  // } = useQuery(GET_POSTS_BY_USER);

  // when top category changes, update top categories state
  useEffect(() => {
    if (topCatLoading) {
      setTopCategories({
        ...topCategories,
        title: "Loading Top Categories...",
      });
    }
    if (topCatData) {
      setTopCategories({
        ...topCategories,
        title: "Top Categories",
        topCategories: topCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
  }, [topCatData]);

  // when all category changes, update top categories state
  useEffect(() => {
    if (allCatLoading) {
      setAllCategories({
        // ...allCategories,
        title: "Loading All Categories...",
      });
    }
    if (allCatData) {
      setAllCategories({
        // ...allCategories,
        title: "All Categories",
        allCategories: allCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
  }, [allCatData]);

  useEffect(() => {
    if (postsByUserIdData) {
      setUser({
        ...user,
        username: postsByUserIdData.user.username,
        id: postsByUserIdData.user._id,
        totalPosts: postsByUserIdData.user.posts.length,
      });
      let holdingArr = [];
      postsByUserIdData.user.posts.forEach((post) => {
        let item = {};
        item.title = post.title;
        item.date_created = post.date_created;
        item.postId = post._id;
        item.subCatId = post.subcategory._id;
        item.subCategory = post.subcategory.name;
        item.parentId = post.subcategory.category._id;
        item.parentCategory = post.subcategory.category.name;
        holdingArr.push(item);
      });
      setPosts({
        ...posts,
        postsDisplay: holdingArr,
      });
    }
  }, [postsByUserIdData]);

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <TopCat
            // selectItem={handleCategoryClick}
            category={topCategories.title}
            list={topCategories.topCategories}
          />
          {topCatLoading ? <Loading /> : ""}
          <br></br>
          <AllCat
            // selectCat={handleCategoryClick}
            category={allCategories.title}
            list={allCategories.allCategories}
          />
          {allCatLoading ? <Loading /> : ""}
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="container rounded px-2">
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
              author={postsByUserIdData.user.username}
              postId={post.postId}
              subcategoryId={post.subCatId}
              subcategory={post.subCategory}
              categoryId={post.parentId}
              category={post.parentCategory}
            />
          ))}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
          <h1 className="text-center font-bold">Welcome {user.username}</h1>
          <p className="ml-4 mr-4 mb-1 text-center">
            Total Number Of Posts: {user.totalPosts}{" "}
          </p>
        </div>
      </Col>
    </VGrid>
  );
}
export default Account;
