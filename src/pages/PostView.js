import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Subcategory from "../components/Subcategory";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";
// import OrderedList from "../components/OrderedList";
// import UnorderedList from "../components/UnorderedList";
import queryForSubCatsByParentId from "../utils/API";
import LoginBox from "../components/LoginBox";
import InputPost from "../components/InputPost";
import Comments from "../components/Comments";
import Loading from "../components/Loading";

// Query graphql
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Subcategory from "../components/Subcategory";
import InputComment from "../components/InputComment";

import { useSelector, useDispatch } from "react-redux";
import { Make_Post } from "../actions";

const GET_USERS = gql`
  query {
    users {
      _id
      username
      isMod
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
const GET_TOPCATS = gql`
  query {
    categories(categoryInput: { sortByPosts: true }) {
      name
      _id
    }
  }
`;

function PostView() {
  const { catid } = useParams();
  const { subcatid } = useParams();
  const { postId } = useParams();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const MakeAPost = useSelector((state) => state.MakeAPost);
  const dispatch = useDispatch();

  const GET_POST_BY_ID = gql`
  query {
    post (id: "${postId}") {
        _id
        title
        body
        date_created
        author {
          username
          _id
        }
        category {
            name
            _id
        }
        subcategory {
            name
            _id
        }
        replies{
          body
          date_created
          author{
            username
          }
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

  const GET_ALL_COMMENTS_BY_ID = gql`
  query {
    replies (postId: "${postId}") {
          _id
          body
          date_created
          author{
            username
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
  const [comments, setComments] = useState({
    commentsDisplay: [],
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

  // Queries database to get comments
  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(GET_ALL_COMMENTS_BY_ID);

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
      setSubCategories({
        ...subCategories,
        currCategory: postByIdData.post.subcategory.name,
      });
      setNewPosts({
        ...newPosts,
        postDisplay: {
          id: postByIdData.post._id,
          title: postByIdData.post.title,
          author: postByIdData.post.author.username,
          authorId: postByIdData.post.author._id,
          date_created: postByIdData.post.date_created,
          body: postByIdData.post.body,
          parentCategory: postByIdData.post.category.name,
          subCategory: postByIdData.post.subcategory.name,
          subCategoryId: subcatid,
        },
      });
      setSubCategories({
        ...subCategories,
        parentCategory: postByIdData.post.category.name,
        parentCategoryId: catid,
        currCategory: postByIdData.post.subcategory.name,
      });
    }
  }, [postByIdData]);

  useEffect(() => {
    if (commentsData) {
      let holdingArr = [...comments.commentsDisplay];
      const commentsById = commentsData.replies;
      commentsById.forEach((comment) => {
        let item = {};
        item.body = comment.body;
        item.date_created = comment.date_created;
        item.author = comment.author.username;
        item.id = comment._id;
        holdingArr.push(item);
      });
      setComments({
        ...comments,
        commentsDisplay: holdingArr,
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

  // const handleUserClick = (userId) => {
  //   console.log(userId);
  // };

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <Subcategory
            // selectCat={handleCategoryClick}
            category={subCategories.parentCategory}
            parentId={subCategories.parentCategoryId}
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
        <div className="container px-2">
          {MakeAPost ? (
            <InputPost category={catid} list={subCategories.subCategories} />
          ) : (
            ""
          )}
          {postByIdLoading ? (
            <h1>Loading post...</h1>
          ) : (
            <h1>
              Current category:{" "}
              <Link className="text-RocketJessie" to={`/category/${catid}`}>
                {newPosts.postDisplay.parentCategory}
              </Link>{" "}
              >>{" "}
              <Link
                className="text-RocketJames"
                to={`/category/${catid}/subcategory/${subcatid}`}
              >
                {newPosts.postDisplay.subCategory}
              </Link>
            </h1>
          )}
          {postByIdLoading ? (
            <Loading />
          ) : (
            <Posts
              title={newPosts.postDisplay.title}
              body={newPosts.postDisplay.body}
              date_created={newPosts.postDisplay.date_created}
              subcategory={newPosts.postDisplay.subCategory}
              subcategoryId={newPosts.postDisplay.subCategoryId}
              category={newPosts.postDisplay.parentCategory}
              categoryId={subCategories.parentCategoryId}
              author={newPosts.postDisplay.author}
              authorId={newPosts.postDisplay.authorId}
              postId={newPosts.postDisplay.id}
            />
          )}
          <br />
          {isLoggedIn ? (
            <InputComment
              category={catid}
              postId={postId}
              // author
            />
          ) : (
            ""
          )}
          {comments.commentsDisplay.map((comment) => (
            <Comments
              key={comment.id}
              author={comment.author}
              body={comment.body}
              date_created={comment.date_created}
            />
          ))}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          {isLoggedIn ? (
            <button
              className={
                (MakeAPost ? "hidden " : "block ") +
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          <TPoints
            // selectItem={handleUserClick}
            category={topPoints.title}
            list={topPoints.topPoints}
          />
          {topPointsLoading ? <Loading /> : ""}
          <br></br>
          <TPoster
            // selectItem={handleUserClick}
            category={topPosters.title}
            list={topPosters.topPosters}
          />
          {topPostersLoading ? <Loading /> : ""}
        </div>
        <br></br>
        <Mods
          // selectItem={handleUserClick}
          category={categoryMods.title}
          list={categoryMods.mods}
        />
        {modLoading ? <Loading /> : ""}
      </Col>
    </VGrid>
  );
}
export default PostView;
