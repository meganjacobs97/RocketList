import React, { useState, useEffect } from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
// import TPoints from "../components/TPoints";
// import TPoster from "../components/TPoster";
// import Mods from "../components/Mods";
import OrderedList from "../components/OrderedList";
import UnorderedList from "../components/UnorderedList";
import LoginBox from "../components/LoginBox";

// Query graphql
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
    }
  }
`;
const GET_SUBCATS = gql`
  query {
    subcategories {
      _id
      name
      description
      category {
        name
        _id
      }
    }
  }
`;

const GET_ALLCATS = gql`
  query {
    categories {
      name
      _id
    }
  }
`;

const GET_SUBCATS_BY_CATID = (parentId) => {
  return gql`
    {
      category(id: "${parentId}") {
        name
        _id
        subcategories {
          name
          _id
        }
      }
    }
  `;
};

const GET_ALL_POSTS = gql`
  {
    posts {
      _id
      title
      body
      date_created
      category {
        name
        _id
      }
      subcategory {
        name
        _id
      }
      author {
        username
      }
    }
  }
`;

function Main(props) {
  const isLoggedIn = props.isLoggedIn;
  const [topCategories, setTopCategories] = useState({
    topCategories: [],
  });
  const [allCategories, setAllCategories] = useState({
    allCategories: ["Anime/Manga", "World News", "Literature"],
  });
  const [topPoints, setTopPoints] = useState({
    topPoints: ["Paul", "Paul again", "Paul x 3"],
  });
  const [topPosters, setTopPosters] = useState({
    topPosters: ["Louis", "Louis again", "Louis x 3"],
  });
  const [categoryMods, setCategoryMods] = useState({
    mods: ["Dion", "Dion again", "Dion x 3"],
  });
  const [posts, setPosts] = useState({
    postsDisplay: [],
  });

  // const [tempPostArr, setTempPostArr] = useState({
  //   query: testPostArr,
  // });

  // Queries database to get users (placeholder, will get mods)
  // const { loading: userLoading, error: userError, data: userData } = useQuery(
  //   GET_USERS
  // );
  // Queries database to get all subcategories for a given ID!
  // const {
  //   loading: subCatIdLoading,
  //   error: subCatIdError,
  //   data: subCatIdData,
  // } = useQuery(GET_SUBCATS_BY_CATID("5ebe3b5dad332d50981177ef"));
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
  // Queries database to get top points holders (placeholder)
  const {
    loading: topPointsLoading,
    error: topPointsError,
    data: topPointsData,
  } = useQuery(GET_USERS);
  // Queries database to get top posters (placeholder)
  const {
    loading: topPostersLoading,
    error: topPostersError,
    data: topPostersData,
  } = useQuery(GET_USERS);
  // Queries database to get mods (placeholder)
  const { loading: modLoading, error: modError, data: modData } = useQuery(
    GET_USERS
  );
  // Queries database to get all posts
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_ALL_POSTS);

  // on page load, updates state objects
  useEffect(() => {
    if (topCatData) {
      setTopCategories({
        ...topCategories,
        topCategories: topCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
    if (allCatData) {
      setAllCategories({
        ...allCategories,
        allCategories: allCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
    if (topPointsData) {
      setTopPoints({
        ...topPoints,
        topPoints: topPointsData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (topPostersData) {
      setTopPosters({
        ...topPosters,
        topPosters: topPostersData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (modData) {
      setCategoryMods({
        ...categoryMods,
        mods: modData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
    if (postsData) {
      setPosts({
        ...posts,
        postsDisplay: postsData.posts.map((post) => ({
          id: post._id,
          author: post.author.username,
          title: post.title,
          date_created: post.date_created,
          body: post.body,
          parentCategory: post.category.name,
          parentCatId: post.category._id,
          subCategory: post.subcategory.name,
          subCatId: post.subcategory._id,
        })),
      });
    }
  }, [
    topCatData,
    allCatData,
    topPointsData,
    topPostersData,
    modData,
    postsData,
  ]);

  const handleUserClick = (userId) => {
    console.log(userId);
  };
  const handleCategoryClick = (parentId) => {
    console.log(parentId);
  };
  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <TopCat
            selectItem={handleCategoryClick}
            category="Top Categories"
            list={topCategories.topCategories}
          />
          <br></br>
          <AllCat
            selectCat={handleCategoryClick}
            category="All Categories"
            list={allCategories.allCategories}
          />
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded px-2">
          {posts.postsDisplay.map((post) => (
            <Posts
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
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {props.isLoggedIn ? "" : <LoginBox isLoggedIn={isLoggedIn} />}
          <br></br>
          <OrderedList
            category="Top Points Holders"
            list={topPoints.topPoints}
          />
          {/* <TPoints name={"Paul"} /> */}
          <br></br>
          <OrderedList category="Top Posters" list={topPosters.topPosters} />
          {/* <TPoster name={"Dion"} /> */}
          <br></br>
          <UnorderedList category="Mods" list={categoryMods.mods} />
        </div>
        {/* <Mods name={"Louis"} /> */}
      </Col>
    </VGrid>
  );
}

export default Main;
