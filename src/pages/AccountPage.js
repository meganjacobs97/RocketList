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
  // const [posts, setPosts] = useState({
  //   postsDisplay: [],
  // });
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
      posts {
        title
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

  // console.log(postsByUserData);

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

  // useEffect(() => {
  //   if (postsByUserIdData) {
  //     let holdingArr = [...posts.postsDisplay];
  //     const subcategoriesQueried = postsByUserIdData.category.subcategories;
  //     subcategoriesQueried.forEach((subcategory) => {
  //       let subCategId = subcategory._id;
  //       let subCategName = subcategory.name;
  //       subcategory.posts.forEach((post) => {
  //         let item = {};
  //         item.title = post.title;
  //         item.body = post.body;
  //         item.date_created = post.date_created;
  //         item.author = post.author.username;
  //         item.postId = post._id;
  //         item.subCatId = subCategId;
  //         item.subCategory = subCategName;
  //         item.parentId = catid;
  //         item.parentCategory = subCategories.parentCategory;
  //         holdingArr.push(item);
  //       });
  //     });
  //     setPosts({
  //       ...posts,
  //       postsDisplay: holdingArr,
  //     });
  //   }
  // }, [postsByUserIdData]);

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
        <div className="border-2 border-RocketBlack container rounded px-2">
          {postsByUserIdLoading ? (
            <h1>Loading your posts...</h1>
          ) : (
            <h1>Your Posts</h1>
          )}
          {postsByUserIdLoading ? <Loading /> : ""}
          {/* {posts.postsDisplay.map((post) => (
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
          ))} */}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
          <h1 className="text-center font-bold">Welcome usersusername</h1>
          <p>Total Number Of Posts: usersnumPosts </p>
          <p>Posts By Category: userspostsByCatergory </p>
        </div>
      </Col>
    </VGrid>
  );
}
export default Account;
