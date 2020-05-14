import React from "react";
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
  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <TopCat name={"Rory"} />
          <br></br>
          <AllCat />
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <Posts posts={testPostArr} />
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
