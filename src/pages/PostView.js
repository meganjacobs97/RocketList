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
import Comments from "../components/Comments"

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
const GET_ALL_POSTS = gql`
  {
    posts {
      _id
      title
      body
      date_created
      category {
        name
      }
      subcategory {
        name
      }
      author {
        username
      }
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
  
  const GET_ALL_COMMENTS_BY_ID = gql`
  query {
    post (id: "${postId}") {
        replies{
          _id
          body
          author{
            username
          }
        }
    }
  }
  `


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
  const [newPosts, setNewPosts] = useState({
    postDisplay: {},
  });
  const [comments, setComments] = useState({
    commentsDisplay: []
  })


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
  // Queries database to get one post
  const {
    loading: postByIdLoading,
    error: postByIdError,
    data: postByIdData,
  } = useQuery(GET_POST_BY_ID);
  // Queries database to get comments
  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(GET_ALL_COMMENTS_BY_ID)

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
  useEffect(() => {
    if (postByIdData) {
      setNewPosts({
        ...newPosts,
        postDisplay: {
          id: postByIdData.post._id,
          author: postByIdData.post.author.username,
          title: postByIdData.post.title,
          date_created: postByIdData.post.date_created,
          body: postByIdData.post.body,
          parentCategory: postByIdData.post.category.name,
          subCategory: postByIdData.post.subcategory.name,
        },
      });
    }
  }, [postByIdData]);

  useEffect(() => {
    console.log(commentsData)
    if (commentsData) {
      // console.log(postsData);
      // console.log(postsData.subcategory.posts);
      console.log(commentsData.posts.replies)
      setPosts({
        ...comments,
        commentsDisplay: commentsData.posts.replies.map((post) => ({
          body: post.body,
          date_created: post.date_created,
          author: post.author.username,
          id: post._id,
        })),
      });
    }
  }, [commentsData]);


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
        <div className="border-2 border-RocketBlack container rounded px-2">
          <h1>Current category: {subCategories.currCategory}</h1>
          <Posts
            title={newPosts.postDisplay.title}
            body={newPosts.postDisplay.body}
            date_created={newPosts.postDisplay.date_created}
            subcategory={newPosts.postDisplay.subCategory}
            category={newPosts.postDisplay.parentCategory}
            author={newPosts.postDisplay.author}
            postId={newPosts.postDisplay.id}
          />
        </div>
        <div>
          {/* <Comments
          author={commentsData.commentsDisplay.author}
          body={commentsData.commentsDisplay.body}
          date_created={commentsData.commentsDisplay.date_created}
          /> */}
        </div>

      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {/* {props.isLoggedIn ? <InputPost /> : <LoginBox />} */}
          {/* {props.isLoggedIn ? <InputPost /> : ""} */}
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
export default PostView;