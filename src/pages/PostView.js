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
import Loading from "../components/Loading"

// Query graphql
import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Subcategory from "../components/Subcategory";

// import { connect } from 'react-redux'

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

function PostView(props) {
  const { catid } = useParams();
  const { subcatid } = useParams();
  const { postId } = useParams();

  const GET_POST_BY_ID = gql`
  query {
    post (id: "${postId}") {
        _id
        title
        body
        date_created
        author {
          username
        }
        category {
            name
            _id
        }
        subcategory {
            name
            _id
        }
    }
  }
`;
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
  const [topPoints, setTopPoints] = useState({
    topPoints: [],
    title: "",
  });
  const [topPosters, setTopPosters] = useState({
    topPosters: [],
    title: "",
  });
  const [categoryMods, setCategoryMods] = useState({
    mods: [],
    title: "",
  });
  // const [posts, setPosts] = useState({
  //   postsDisplay: [],
  // });
  const [newPosts, setNewPosts] = useState({
    postDisplay: {},
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
  // Queries database to get one post
  const {
    loading: postByIdLoading,
    error: postByIdError,
    data: postByIdData,
  } = useQuery(GET_POST_BY_ID);

   // on page load, updates state objects
  useEffect(() => {
    if (topPointsLoading) {
      setTopPoints({
        ...topPoints,
        title: "Loading Top Points Holders...",
      });
    }
    if (topPointsData) {
      setTopPoints({
        ...topPoints,
        title: "Top Points Holders",
        topPoints: topPointsData.users.map((user) => ({
          name: user.username,
          id: user._id,
        })),
      });
    }
  }, [topPointsData]);

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
        mods: modData.users.map((user) => ({
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
        currCategory: subCatIdData.category.name,
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

  // when the request for a single post returns data, update state
  useEffect(() => {
    if (postByIdData) {
      setNewPosts({
        ...newPosts,
          postDisplay: {
          id: postByIdData.post._id,
          title: postByIdData.post.title,
          author: postByIdData.post.author.username,
          date_created: postByIdData.post.date_created,
          body: postByIdData.post.body,
          parentCategory: postByIdData.post.category.name,
          subCategory: postByIdData.post.subcategory.name,
          subCategoryId: subcatid
        },
      });
      setSubCategories({
        ...subCategories,
        parentCategory: postByIdData.post.category.name,
        parentCategoryId: catid,
        currCategory: postByIdData.post.subcategory.name
      })
    }
  }, [postByIdData]);

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
          {subCatIdLoading ? <Loading /> : ""}
          <br></br>
          <TopCat
            selectItem={handleCategoryClick}
            category={topCategories.title}
            list={topCategories.topCategories}
          />
          {topCatLoading ? <Loading /> : ""}
          <br></br>
          <AllCat
            selectCat={handleCategoryClick}
            category={allCategories.title}
            list={allCategories.allCategories}
          />
          {allCatLoading ? <Loading /> : ""}
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded px-2">
          {postByIdLoading ? <h1>Loading post...</h1> : 
          <h1>Current category: <a className="text-RocketJessie" href={`/category/${catid}`}>{newPosts.postDisplay.parentCategory}</a> >> <a className="text-RocketJames" href={`/category/${catid}/subcategory/${subcatid}`}>{newPosts.postDisplay.subCategory}</a></h1> }
          {postByIdLoading ? <Loading /> : 
          <Posts
            title={newPosts.postDisplay.title}
            body={newPosts.postDisplay.body}
            date_created={newPosts.postDisplay.date_created}
            subcategory={newPosts.postDisplay.subCategory}
            subcategoryId={newPosts.postDisplay.subCategoryId}
            category={newPosts.postDisplay.parentCategory}
            categoryId={subCategories.parentCategoryId}
            author={newPosts.postDisplay.author}
            postId={newPosts.postDisplay.id}
          /> }
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {/* {props.isLoggedIn ? <InputPost /> : <LoginBox />} */}
          {/* {props.isLoggedIn ? <InputPost /> : ""} */}
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category={topPoints.title}
            list={topPoints.topPoints}
          />
          {topPointsLoading ? <Loading /> : ""}
          <br></br>
          <OrderedList
            selectItem={handleUserClick}
            category={topPosters.title}
            list={topPosters.topPosters}
          />
          {topPostersLoading ? <Loading /> : ""}
        </div>
        <br></br>
        <UnorderedList
          selectItem={handleUserClick}
          category={categoryMods.title}
          list={categoryMods.mods}
        />
        {modLoading ? <Loading /> : ""}
      </Col>
    </VGrid>
  );
}
export default PostView;