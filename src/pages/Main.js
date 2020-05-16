import React, { useState, useEffect } from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
// import TopCat from "../components/TopCat";
// import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
// import TPoints from "../components/TPoints";
// import TPoster from "../components/TPoster";
// import Mods from "../components/Mods";
import OrderedList from "../components/OrderedList";
import UnorderedList from "../components/UnorderedList";

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

const testPostArr = [
  {
    post: {
      title: "I love pokemon",
      body: "my favorite is chandelure",
      date_created: "13-may-2020",
      replies: [],
      subcategory: {
        name: "pokemon go",
        description: "all about pokemon go",
        category: {
          name: "pokemon",
          description: "all things pokemon related",
        },
      },
      author: {
        username: "testUserDion",
      },
    },
  },
  {
    post: {
      title: "I love pokemon",
      body: "my favorite is magikarp",
      date_created: "13-may-2020",
      replies: [],
      subcategory: {
        name: "pokemon go",
        description: "all about pokemon go",
        category: {
          name: "pokemon",
          description: "all things pokemon related",
        },
      },
      author: {
        username: "louis",
      },
    },
  },
];

function Main() {
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

  const [tempPostArr, setTempPostArr] = useState({
    query: testPostArr,
  });

  // Queries database to get users (placeholder, will get mods)
  // const { loading: userLoading, error: userError, data: userData } = useQuery(
  //   GET_USERS
  // );
  // Queries database to get all subcategories
  // const {
  //   loading: subCatLoading,
  //   error: subCatError,
  //   data: subCatData,
  // } = useQuery(GET_SUBCATS);
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
  }, [
    topCatData,
    allCatData,
    topPointsData,
    topPostersData,
    modData,
  ]);

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <OrderedList
            category="Top Categories"
            list={topCategories.topCategories}
          />
          <br></br>
          <UnorderedList
            category="All categories"
            list={allCategories.allCategories}
          />
          {/* <AllCat /> */}
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded px-2">
          {tempPostArr.query.map((post) => (
            <Posts
              title={post.post.title}
              body={post.post.body}
              date_created={post.post.date_created}
              subcategory={post.post.subcategory.name}
              category={post.post.subcategory.category.name}
              author={post.post.author.username}
            />
          ))}
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          <OrderedList
            category="Top Points Holders"
            list={topPoints.topPoints}
          />
          {/* <TPoints name={"Paul"} /> */}
          <br></br>
          <OrderedList
            category="Top Posters"
            list={topPosters.topPosters}
          />
          {/* <TPoster name={"Dion"} /> */}
        </div>
        <br></br>
        <UnorderedList category="Mods" list={categoryMods.mods}/>
        {/* <Mods name={"Louis"} /> */}
      </Col>
    </VGrid>
  );
}

export default Main;
