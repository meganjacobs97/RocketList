import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { Token } from "./actions";
const token = JSON.parse(localStorage.getItem("token"));

// import Footer from "./components/Footer";

const UserId = JSON.parse(localStorage.getItem("userId"));

const App = () => {
  document.title = "RocketList";
  const dispatch = useDispatch();
  if (token) {
    dispatch(Token());
  }

  // const [cookieTrail, setCookieTrail] = useState({
  //   currLocation: "Main page"
  // })

  // useEffect(() => {
  //   setCookieTrail({
  //     currLocation: ""
  //   })
  // }, [])

  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {" "}
            <Main />
          </Route>
          <Route exact path="/category/:catid">
            {" "}
            <CategoryView />
          </Route>
          <Route exact path="/category/:catid/subcategory/:subcatid">
            {" "}
            <SubCategoryView />
          </Route>
          <Route
            exact
            path="/category/:catid/subcategory/:subcatid/post/:postId"
          >
            {" "}
            <PostView />
          </Route>
          <Route path="/account/:userId">
            {" "}
            <AccountPage UserId={UserId}></AccountPage>
          </Route>
          <Route path={`/profile/:userId`}>
            {" "}
            <AccountPage />
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
