import React from "react";
import Menu from "./Menu";
import Logo from "./Photo/log.png";

export default function Navbar() {
  return (
    <div id="top-of-page" className="grid grid-rows-2">
      <div id="header" className="flex justify-between">
        <div className="flex align-center">
          <img src={Logo} className="object-center ml-2 h-20" alt="logo" />
        </div>
        <div className="flex align-center">
          <Menu />
        </div>
      </div>
      <div id="navbar" className="flex flex-col">
        <div>
          <h1 className="flex justify-center">Welcome to RocketList!</h1>
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
