import React, { useState, useEffect } from "react";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
// import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";
import LoginBox from "../components/LoginBox";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { Login_Box, SHOW_CATS } from "../actions";

// Query graphql
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
      isMod
      posts {
        title
      }
      points
    }
  }
`;
const GET_TOPPOSTERS = gql`
  query {
    users(sortByPosts: true) {
      _id
      username
      email
      isMod
      posts {
        title
      }
      points
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

const GET_TOPCATS = gql`
  query {
    categories(categoryInput: { sortByPosts: true }) {
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
        _id
      }
    }
  }
`;

function Main() {
  const dispatch = useDispatch();
  const ShowLoginBox = useSelector((state) => state.ShowLoginBox);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const ShowCats = useSelector((state) => state.ShowCats);
  const [topCategories, setTopCategories] = useState({
    topCategories: [],
    title: "",
  });
  const [allCategories, setAllCategories] = useState({
    allCategories: [],
    title: "",
  });
  // const [topPoints, setTopPoints] = useState({
  //   topPoints: [],
  //   title: "",
  // });
  const [topPosters, setTopPosters] = useState({
    topPosters: [],
    title: "",
  });
  const [categoryMods, setCategoryMods] = useState({
    mods: [],
    title: "",
  });
  const [posts, setPosts] = useState({
    postsDisplay: [],
    title: "",
  });

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
  } = useQuery(GET_TOPCATS);
  // Queries database to get top points holders (placeholder)
  // const {
  //   loading: topPointsLoading,
  //   error: topPointsError,
  //   data: topPointsData,
  // } = useQuery(GET_USERS);
  // Queries database to get top posters (placeholder)
  const {
    loading: topPostersLoading,
    error: topPostersError,
    data: topPostersData,
  } = useQuery(GET_TOPPOSTERS);
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
  // if top categories load, update state
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

  // if all categories load, update state
  useEffect(() => {
    if (allCatLoading) {
      setAllCategories({
        ...allCategories,
        title: "Loading All Categories...",
      });
    }
    if (allCatData) {
      setAllCategories({
        ...allCategories,
        title: "All Categories",
        allCategories: allCatData.categories.map((category) => ({
          name: category.name,
          id: category._id,
        })),
      });
    }
  }, [allCatData]);

  // if top points data load, update state
  // useEffect(() => {
  //   if (topPointsLoading) {
  //     setTopPoints({
  //       ...topPoints,
  //       title: "Loading Top Points Holders...",
  //     });
  //   }
  //   if (topPointsData) {
  //     setTopPoints({
  //       ...topPoints,
  //       title: "Top Points Holders",
  //       topPoints: topPointsData.users.map((user) => ({
  //         name: user.username,
  //         id: user._id,
  //       })),
  //     });
  //   }
  // }, [topPointsData]);

  // if top posters load, update state
  useEffect(() => {
    if (topPostersLoading) {
      setTopPosters({
        ...topPosters,
        title: "Loading Top Posters...",
      });
    }
    if (topPostersData) {
      setTopPosters({
        ...topPosters,
        title: "Top Posters",
        topPosters: topPostersData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
  }, [topPostersData]);

  // if mods load, update state
  useEffect(() => {
    if (modLoading) {
      setCategoryMods({
        ...categoryMods,
        title: "Loading moderators...",
      });
    }
    if (modData) {
      setCategoryMods({
        ...categoryMods,
        title: "Moderators",
        mods: modData.users
          .filter((user) => user.isMod)
          .map((user) => ({
            name: user.username,
            id: user._id,
          })),
      });
    }
  }, [modData]);

  // if posts load, update state
  useEffect(() => {
    if (postsData) {
      setPosts({
        ...posts,
        postsDisplay: postsData.posts.map((post) => ({
          id: post._id,
          author: post.author.username,
          authorId: post.author._id,
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
  }, [postsData]);

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <TopCat
            category={topCategories.title}
            list={topCategories.topCategories}
          />
          {topCatLoading ? <Loading color="#BC3287" /> : ""}
          <br></br>
          <AllCat
            category={allCategories.title}
            list={allCategories.allCategories}
          />
          {allCatLoading ? <Loading color="#BC3287" /> : ""}
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="flex flex-row justify-around rounded bg-white shadow visible lg:hidden">
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(SHOW_CATS());
            }}
          >
            Explore
          </div>
          {isLoggedIn ? (
            ""
          ) : (
            <div
              onClick={(e) => {
                e.preventDefault();
                dispatch(Login_Box());
              }}
            >
              Login
            </div>
          )}
        </div>
        <br className="lg:hidden"></br>
        <div className="lg:hidden">
          {ShowCats ? (
            <div>
              <AllCat
                category={allCategories.title}
                list={allCategories.allCategories}
              />
              <br className="lg:hidden"></br>
            </div>
          ) : (
            ""
          )}
          {ShowLoginBox ? <LoginBox /> : ""}
        </div>
        <div className="container rounded px-2">
          <div className="container rounded bg-white text-center shadow-xl">
            {postsLoading ? (
              <h1 className="font-bold text-xl">Loading all posts...</h1>
            ) : (
              <h1 className="font-bold text-xl">All posts</h1>
            )}
          </div>
          {postsLoading ? <Loading color="#D9D9D9" /> : ""}
          {posts.postsDisplay.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
              date_created={post.date_created}
              author={post.author}
              authorId={post.authorId}
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
          {isLoggedIn ? "" : <LoginBox />}
          {/* <br></br>
          <TPoints category={topPoints.title} list={topPoints.topPoints} />
          {topPointsLoading ? <Loading /> : ""} */}
          <br></br>
          <TPoster category={topPosters.title} list={topPosters.topPosters} />
          {topPostersLoading ? <Loading color="#220000" /> : ""}
          <br></br>
          <Mods category={categoryMods.title} list={categoryMods.mods} />
          {modLoading ? <Loading color="#220000" /> : ""}
        </div>
      </Col>
    </VGrid>
  );
}

export default Main;
