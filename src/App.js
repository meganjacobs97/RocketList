import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryView from "./pages/CategoryView";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () => {
  document.title = "RocketList";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [subCategories, setSubCategories] = useState({
  //   parentCategory: "",
  //   parentCategoryId: "",
  //   currCategory: "",
  //   subCategories: [],
  // });

  // const handleCatChange = (id) => {
  //   if (id === "5ebe3b5dad332d50981177ef") {
  //     setSubCategories({
  //       ...subCategories,
  //       parentCategory: "Video Games",
  //       parentCategoryId: `${id}`,
  //       currCategory: "Video Games",
  //       subCategories: ["WoW", "Minecraft", "Misc"],
  //     });
  //   }
  // };

  return (
    <Router>
      <Wrapper>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/">
            {" "}
            <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Main>
          </Route>
          <Route exact path="/category">
            {" "}
            <CategoryView
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              // component={CategoryView}
            ></CategoryView>
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Wrapper>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
