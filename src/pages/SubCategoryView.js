import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FontAwesome from "react-fontawesome";
// import Subcategory from "../components/Subcategory";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
// import Posts from "../components/Posts";
// import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";
// import OrderedList from "../components/OrderedList";
// import UnorderedList from "../components/UnorderedList";
// import queryForSubCatsByParentId from "../utils/API";
import LoginBox from "../components/LoginBox";
import InputPost from "../components/InputPost";
import Card from "../components/Card";
import Loading from "../components/Loading";

// Query graphql
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Subcategory from "../components/Subcategory";
import { useSelector, useDispatch } from "react-redux";
import {
  Make_Post,
  Login_Box,
  SHOW_CATS,
  SHOW_SUB_CATS,
  RESET,
} from "../actions";

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

// import { connect } from 'react-redux'

function SubCategoryView() {
  const { catid } = useParams();
  const { subcatid } = useParams();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const MakeAPost = useSelector((state) => state.MakeAPost);
  const ShowCats = useSelector((state) => state.ShowCats);
  const ShowSubCats = useSelector((state) => state.ShowSubCats);
  const ShowLoginBox = useSelector((state) => state.ShowLoginBox);
  const dispatch = useDispatch();

  const DoResetExplore = () => {
    if (MakeAPost || ShowSubCats || ShowLoginBox === true) {
      dispatch(RESET());
    }
  };

  const DoResetSubCats = () => {
    if (MakeAPost || ShowCats || ShowLoginBox === true) {
      dispatch(RESET());
    }
  };

  const DoResetAsk = () => {
    if (ShowCats || ShowSubCats || ShowLoginBox === true) {
      dispatch(RESET());
    }
  };

  const DoResetLogin = () => {
    if (MakeAPost || ShowCats || ShowSubCats === true) {
      dispatch(RESET());
    }
  };

  const GET_SUBCATS_BY_CATID = gql`
  query {
    category(id: "${catid}") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }
`;
  const GET_POSTS_BY_SUBCATID = gql`
  query {
    subcategory(id: "${subcatid}") {
      name
      posts {
        _id
        title
        body
        date_created
        author {
          username
          _id
        }
      }
    }
  }
`;

  const GET_TOPPOSTERS = gql`
    query {
      postsByCategory (categoryId: "${catid}") {
        user {
          username
          _id
          posts {
            _id
          }
        }
      }
    }
  `;

  // const { parentCategory, parentCategoryId, currCategory, subCategories } = props.subcategory;
  // const hamburger = props.chicken;
  // Sets state for rendered components (subcategories, topCategories, allCategories, topPoints, topPosters, and categoryMods)
  const [subCategories, setSubCategories] = useState({
    parentCategory: "",
    parentCategoryId: "",
    currCategory: "",
    subCategories: [],
  });
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
  });

  // Queries database to get all subcategories for a given ID!
  const {
    loading: subCatIdLoading,
    error: subCatIdError,
    data: subCatIdData,
  } = useQuery(GET_SUBCATS_BY_CATID);

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
  // Queries database to get posts in subcategory
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_POSTS_BY_SUBCATID);

  // on page load, updates state objects
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
        topPosters: topPostersData.postsByCategory.map((postsByCategory) => ({
          name: postsByCategory.user.username,
          id: postsByCategory.user._id,
          posts: postsByCategory.posts,
        })),
      });
    }
  }, [topPostersData]);

  useEffect(() => {
    if (modLoading) {
      setCategoryMods({
        ...categoryMods,
        title: "Loading Moderators...",
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

  // when subcatid changes, update subcat state
  useEffect(() => {
    if (subCatIdData) {
      setSubCategories({
        ...subCategories,
        parentCategory: subCatIdData.category.name,
        parentCategoryId: catid,
        subCategories: subCatIdData.category.subcategories.map(
          (subcategory) => ({
            name: subcategory.name,
            id: subcategory._id,
          })
        ),
      });
    }
  }, [subCatIdData]);

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

  // when posts, update posts state
  useEffect(() => {
    if (postsData) {
      setSubCategories({
        ...subCategories,
        currCategory: postsData.subcategory.name,
      });
      setPosts({
        ...posts,
        postsDisplay: postsData.subcategory.posts.map((post) => ({
          title: post.title,
          body: post.body,
          date_created: post.date_created,
          author: post.author.username,
          authorId: post.author._id,
          id: post._id,
          subCategoryId: subcatid,
          // subCategory: "Lorem ipsum and yada, subcategory", // works
          // subCategory: subCategories.currCategory, // doesn't work
          parentCatId: catid,
          // parentCatName: "Another Lorem ipsum, category", // works
          parentCatName: subCategories.parentCategory, // doesn't work
        })),
      });
    }
  }, [postsData]);

  // useEffect(() => {}, [subCategories]);

  // const handleCategoryClick = (parentId) => {
  //   setSubCategories({
  //     ...subCategories,
  //     parentCategoryId: parentId,
  //   });
  // };

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <Subcategory
            // selectCat={handleCategoryClick}
            category={subCategories.parentCategory}
            parentId={catid}
            list={subCategories.subCategories}
          />
          {subCatIdLoading ? <Loading /> : ""}
          <br></br>
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
        <div className="flex flex-row justify-around rounded bg-white shadow visible lg:hidden">
          <div
            onClick={(e) => {
              e.preventDefault();
              DoResetExplore();
              dispatch(SHOW_CATS());
            }}
          >
            Explore
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              DoResetSubCats();
              dispatch(SHOW_SUB_CATS());
            }}
          >
            Subcategories
          </div>
          {isLoggedIn ? (
            <div
              onClick={(e) => {
                e.preventDefault();
                DoResetAsk();
                dispatch(Make_Post());
              }}
            >
              Ask
            </div>
          ) : (
            <div
              onClick={(e) => {
                e.preventDefault();
                DoResetLogin();
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
          {ShowSubCats ? (
            <div>
              <Subcategory
                // selectCat={handleCategoryClick}
                category={subCategories.parentCategory}
                parentId={catid}
                list={subCategories.subCategories}
              />
              <br className="lg:hidden"></br>
            </div>
          ) : (
            ""
          )}
          {ShowLoginBox ? <LoginBox /> : ""}
        </div>
        {MakeAPost ? (
          <InputPost category={catid} list={subCategories.subCategories} />
        ) : (
          ""
        )}
        <br className="lg:hidden"></br>
        <div className="container px-2">
          <div className="container rounded bg-white shadow-xl">
            {postsLoading ? (
              <h1 className="font-bold text-xl text-center">
                Loading posts in {subCategories.parentCategory} >>{" "}
                {subCategories.currCategory}
              </h1>
            ) : (
              <h1 className="font-bold text-xl text-center">
                Current category:{" "}
                <Link
                  className="text-RocketJessie hover:underline"
                  to={`/category/${catid}`}
                >
                  {subCategories.parentCategory}
                </Link>{" "}
                >>{" "}
                <Link
                  className="text-RocketJames hover:underline"
                  to={`/category/${catid}/subcategory/${subcatid}`}
                >
                  {subCategories.currCategory}
                </Link>
              </h1>
            )}
          </div>
          {!postsLoading && posts.postsDisplay.length === 0 ? (
            <h1 className="shadow-2xl bg-white container rounded my-2 p-3 text-center">
              No posts in this subcategory yet{" "}
              <FontAwesome
                className="super-crazy-colors"
                name="rocket"
                size="1"
                spin
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />{" "}
              Be the first to create a post!
            </h1>
          ) : (
            posts.postsDisplay.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                body={post.body}
                date_created={post.date_created}
                author={post.author}
                authorId={post.authorId}
                postId={post.id}
                subcategoryId={post.subCategoryId}
                // subcategory={post.subCategory} // doesn't work
                subcategory={subCategories.currCategory} // works
                categoryId={post.parentCatId}
                // category={post.parentCatName} // doesn't work
                category={subCategories.parentCategory} // works
              />
            ))
          )}
          {postsLoading ? <Loading /> : ""}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {isLoggedIn ? (
            <button
              className={
                (MakeAPost ? "hidden " : "block ") +
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none shadow-2xl"
              }
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(Make_Post());
              }}
            >
              Make a Post
            </button>
          ) : (
            <LoginBox />
          )}
          <br></br>
          {/* <TPoints
            // selectItem={handleUserClick}
            category={topPoints.title}
            list={topPoints.topPoints}
          />
          {topPointsLoading ? <Loading /> : ""}
          <br></br> */}
          <TPoster
            // selectItem={handleUserClick}
            category={topPosters.title}
            list={topPosters.topPosters}
          />
          {topPostersLoading ? <Loading /> : ""}
          <br></br>
          <Mods
            // selectItem={handleUserClick}
            category={categoryMods.title}
            list={categoryMods.mods}
          />
          {modLoading ? <Loading /> : ""}
        </div>
      </Col>
    </VGrid>
  );
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryView)
export default SubCategoryView;

// check class repo, week 10, folder 19, activity 15 for class based components
