import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Subcategory from "../components/Subcategory";
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
import queryForSubCatsByParentId from "../utils/API";
import LoginBox from "../components/LoginBox";
import InputPost from "../components/InputPost";

// Query graphql
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Subcategory from "../components/Subcategory";

const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
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

// import { connect } from 'react-redux'

function SubCategoryView(props) {
  const { catid } = useParams();
  const { subcatid } = useParams();
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
  const subCatArray = subCategories.subCategories;
  const [topCategories, setTopCategories] = useState({
    topCategories: [],
    title: "",
  });
  const [allCategories, setAllCategories] = useState({
    allCategories: [],
    title: "",
  });
  const [topPoints, setTopPoints] = useState({
    topPoints: [],
  });
  const [topPosters, setTopPosters] = useState({
    topPosters: [],
  });
  const [categoryMods, setCategoryMods] = useState({
    mods: [],
  });
  const [posts, setPosts] = useState({
    postsDisplay: [],
  });
  const [MakeAPost, setMakeAPost] = useState(false);

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
  // Queries database to get posts in subcategory
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_POSTS_BY_SUBCATID);

  // on page load, updates state objects
  useEffect(() => {
    // if(userLoading) console.log("help")
    // if(userError) console.log("I need somebody")
    // if(userLoading) return "Loading...";
    // if(userError) return `Error! $s{error.message}`;
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
  }, [
    // subCatData,
    topPointsData,
    topPostersData,
    modData,
  ]);

  // when subcatid changes, update subcat state
  useEffect(() => {
    if (subCatIdData) {
      console.log(subCatIdData);
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
        title: "Loading...",
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
        title: "Loading...",
        allCategories: ["Loading categories..."],
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
      // console.log(postsData);
      // console.log(postsData.subcategory.posts);
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

  const handleCategoryClick = (parentId) => {
    console.log(parentId);
    setSubCategories({
      ...subCategories,
      parentCategoryId: parentId,
    });
  };

  const handleUserClick = (userId) => {
    console.log(userId);
  };

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <Subcategory
            selectCat={handleCategoryClick}
            category={subCategories.parentCategory}
            parentId={subCategories.parentCategoryId}
            list={subCategories.subCategories}
          />
          <br></br>
          <TopCat
            selectItem={handleCategoryClick}
            category={topCategories.title}
            list={topCategories.topCategories}
          />
          <br></br>
          <AllCat
            selectCat={handleCategoryClick}
            category={allCategories.title}
            list={allCategories.allCategories}
          />
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        {MakeAPost ? (
          <InputPost
            category={catid}
            list={subCategories.subCategories}
            onChange={(value) => setMakeAPost(value)}
          />
        ) : (
          ""
        )}
        <div className="border-2 border-RocketBlack container rounded px-2">
          <h1>
            Current category:{" "}
            <a className="text-RocketJessie" href={`/category/${catid}`}>
              {subCategories.parentCategory}
            </a>{" "}
            >>{" "}
            <a
              className="text-RocketJames"
              href={`/category/${catid}/subcategory/${subcatid}`}
            >
              {subCategories.currCategory}
            </a>
          </h1>
          {posts.postsDisplay.map((post) => (
            <Posts
              title={post.title}
              body={post.body}
              date_created={post.date_created}
              author={post.author}
              postId={post.id}
              subcategoryId={post.subCategoryId}
              // subcategory={post.subCategory} // doesn't work
              subcategory={subCategories.currCategory} // works
              categoryId={post.parentCatId}
              // category={post.parentCatName} // doesn't work
              category={subCategories.parentCategory} // works
            />
          ))}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {props.isLoggedIn ? (
            <button
              className={
                (MakeAPost ? "hidden " : "block ") +
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              }
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMakeAPost(true);
              }}
            >
              Make a Post
            </button>
          ) : (
            <LoginBox />
          )}
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category="Top Points Holders"
            list={topPoints.topPoints}
          />
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category="Top Posters"
            list={topPosters.topPosters}
          />
        </div>
        <br></br>
        <UnorderedList
          selectItem={handleUserClick}
          category="Mods"
          list={categoryMods.mods}
        />
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
