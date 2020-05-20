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
// import queryForSubCatsByParentId from "../utils/API";
import LoginBox from "../components/LoginBox";
import InputPost from "../components/InputPost";
import Card from "../components/Card";
import Loading from "../components/Loading";

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

function CategoryView(props) {
  const { catid } = useParams();
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

  const GET_POSTS_BY_CATID = gql`
  query {
    category (id: "${catid}") {
      name
      _id
      subcategories {
        name
        _id
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
  }
  `;

  // const { parentCategory, parentCategoryId, currCategory, subCategories } = props.subcategory;
  // Creates and sets state for rendered components (subcategories, topCategories, allCategories, topPoints, topPosters, and categoryMods)
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
  // Queries database to get all posts in a given category
  const {
    loading: postsByCatLoading,
    error: postsByCatError,
    data: postsByCatData,
  } = useQuery(GET_POSTS_BY_CATID);

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
    // if (subCatIdLoading) {
    //   setSubCategories({
    //     ...subCategories,
    //     title: "Loading Subcategories"
    //   })
    // }
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

  // when posts come in, update posts state
  useEffect(() => {
    if (postsByCatData) {
      let holdingArr = [...posts.postsDisplay];
      const subcategoriesQueried = postsByCatData.category.subcategories;
      subcategoriesQueried.forEach((subcategory) => {
        let subCategId = subcategory._id;
        let subCategName = subcategory.name;
        subcategory.posts.forEach((post) => {
          let item = {};
          item.title = post.title;
          item.body = post.body;
          item.date_created = post.date_created;
          item.author = post.author.username;
          item.postId = post._id;
          item.subCatId = subCategId;
          item.subCategory = subCategName;
          item.parentId = catid;
          item.parentCategory = subCategories.parentCategory;
          // Does this break react?
          // setPosts(postsDisplay.push(item))
          holdingArr.push(item);
        });
      });
      setPosts({
        ...posts,
        postsDisplay: holdingArr,
      });
    }
  }, [postsByCatData]);

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
          {postsByCatLoading ? (
            <h1>Loading posts in {subCategories.currCategory}...</h1>
          ) : (
            <h1>
              Current category:{" "}
              <a className="text-RocketJessie" href={`/category/${catid}`}>
                {subCategories.currCategory}
              </a>
            </h1>
          )}
          {posts.postsDisplay.map((post) => (
            <Card
              title={post.title}
              body={post.body}
              date_created={post.date_created}
              author={post.author}
              postId={post.postId}
              subcategoryId={post.subCatId}
              subcategory={post.subCategory}
              categoryId={post.parentId}
              category={post.parentCategory}
            />
          ))}
          {postsByCatLoading ? <Loading /> : ""}
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
            <LoginBox setIsLoggedIn={props.setIsLoggedIn} />
          )}
          <br></br>
          <OrderedList
            // selectItem={handleUserClick}
            category={topPoints.title}
            list={topPoints.topPoints}
          />
          {topPointsLoading ? <Loading /> : ""}
          <br></br>
          <OrderedList
            // selectItem={handleUserClick}
            category={topPosters.title}
            list={topPosters.topPosters}
          />
          {topPostersLoading ? <Loading /> : ""}
        </div>
        <br></br>
        <UnorderedList
          // selectItem={handleUserClick}
          category={categoryMods.title}
          list={categoryMods.mods}
        />
        {modLoading ? <Loading /> : ""}
      </Col>
    </VGrid>
  );
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
export default CategoryView;

// check class repo, week 10, folder 19, activity 15 for class based components

/*
  <body>
    <main class="w-3/5 p-8 mx-auto">
      <h1 class="mb-4">tailwind collapsible</h1>
      <section class="shadow">
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Massa vitae tortor condimentum lacinia quis vel eros donec
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 bg-grey-lightest border-indigo">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-indigo font-thin text-xl">
                Lorem ipsum dolor sit amet
              </span>
              <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                <svg
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
            <div>
              <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                <ul class="pl-4">
                  <li class="pb-2">consectetur adipiscing elit</li>
                  <li class="pb-2">
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </li>
                  <li class="pb-2">
                    Viverra orci sagittis eu volutpat odio facilisis mauris
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Lorem dolor sed viverra ipsum
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
              <span class="text-grey-darkest font-thin text-xl">
                Egestas sed tempus urna
              </span>
              <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </header>
          </div>
        </article>
      </section>
    </main>
  </body>;
*/
