import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryView from "./components/CategoryView";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";

const App = () => {
  document.title = "RocketList";
  return (
    <Router>
      <Wrapper >
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/category" component={CategoryView} />
        <Route path="*" component={NoMatch} />
      </Switch>
      </Wrapper >
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
