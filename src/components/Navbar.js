import React from "react";
import Menu from "./Menu";
import Logo from "./Photo/Logo.png";
import rocket from "./Photo/logo-rocket.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div id="top-of-page" className="grid grid-rows-1">
      <div id="header" className="flex justify-between">
        <div className="flex align-center">
          <Link to="/">
            <div>
              <img
                src={Logo}
                className="object-center ml-2 h-20"
                id="rocketlist-logo"
                alt="logo"
              />
              <img
                src={rocket}
                className="object-center ml-2 h-20"
                id="rocketlist-rocket"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex align-center">{isLoggedIn ? <Menu /> : ""}</div>
      </div>
      <div id="navbar" className="flex flex-col">
        <div>
          <h1 className="flex justify-center text-xl">
            Welcome to RocketList!
            <br />
            {props.cookieTrail}
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
