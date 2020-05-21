import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryView from "./pages/CategoryView";
import SubCategoryView from "./pages/SubCategoryView";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
import Chat from "./components/Chat";
import Join from "./components/Join";
import PostView from "./pages/PostView";
import AccountPage from "./pages/AccountPage";
// import Footer from "./components/Footer";

const UserId = JSON.parse(localStorage.getItem("userId"));

const App = () => {
  document.title = "RocketList";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Wrapper>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/">
            {" "}
            <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Main>
          </Route>
          <Route exact path="/category/:catid">
            {" "}
            <CategoryView
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            ></CategoryView>
          </Route>
          <Route exact path="/category/:catid/subcategory/:subcatid">
            {" "}
            <SubCategoryView
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            ></SubCategoryView>
          </Route>
          <Route
            exact
            path="/category/:catid/subcategory/:subcatid/post/:postId"
          >
            {" "}
            <PostView
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            ></PostView>
          </Route>
          <Route path="/account/:userId">
            {" "}
            <AccountPage
              UserId={UserId}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            ></AccountPage>
          </Route>
          <Route path={`/profile/:userId`}>
            {" "}
            <AccountPage></AccountPage>
          </Route>
          <Route path="/join/:id" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Wrapper>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
