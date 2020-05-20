import React from "react";
import Menu from "./Menu";
import Logo from "./Photo/log.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div id="top-of-page" className="grid grid-rows-2">
      <div id="header" className="flex justify-between">
        <div className="flex align-center">
          <Link to="/">
            <img src={Logo} className="object-center ml-2 h-20" alt="logo" />
          </Link>
        </div>
        <div className="flex align-center">
          {props.isLoggedIn ? <Menu setIsLoggedIn={setIsLoggedIn} /> : ""}
        </div>
      </div>
      <div id="navbar" className="flex flex-col">
        <div>
          <h1 className="flex justify-center font-bold">
            Welcome to RocketList!
          </h1>
        </div>
        <div className="flex flex-row justify-around visible lg:invisible">
          <div>Explore</div>
          <div>Answer</div>
          <div>Ask</div>
        </div>
      </div>
    </div>
  );
}
