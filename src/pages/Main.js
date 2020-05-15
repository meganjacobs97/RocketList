import React, { useState } from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import Posts from "../components/Posts";
import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";

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
    excitementLevel: 10000,
    lifeLongLearner: true,
    testCategories: ["Rory", "Rory again", "Rory thrice"],
  });

  const [allCategories, setAllCategories] = useState({
    allCategories: ["Anime/Manga", "World News", "Literature"],
  });

  const [tempPostArr, setTempPostArr] = useState({
    query: testPostArr,
  });

  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
            <h1 className="text-center">Top categories</h1>
            <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
              {topCategories.testCategories.map((category) => (
                <TopCat name={category} />
              ))}
            </ol>
          </div>
          <br></br>
          <AllCat />
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
          <TPoints name={"Paul"} />
          <br></br>
          <TPoster name={"Dion"} />
        </div>
        <br></br>
        <Mods name={"Louis"} />
      </Col>
    </VGrid>
  );
}

export default Main;
