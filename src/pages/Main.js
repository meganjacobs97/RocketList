import React, { useState } from "react";
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
import LoginBox from "../components/LoginBox";

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

function Main(props) {
  const isLoggedIn = props.isLoggedIn;
  const [topCategories, setTopCategories] = useState({
    excitementLevel: 10000,
    lifeLongLearner: true,
    testCategories: ["Rory", "Rory again", "Rory thrice"],
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

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <OrderedList
            category="Top Categories"
            list={topCategories.testCategories}
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
