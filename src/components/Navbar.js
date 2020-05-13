import React from "react";

export default function Navbar() {
  return (
    <div id="top-of-page" className="grid grid-rows-2">
      <div id="header" className="flex justify-between">
        <div className="flex align-center">
          <h1 className="text-2xl">RocketList</h1>
          <img
            src="../Photo/R.png"
            className="object-center ml-2"
            alt="logo"
          />
        </div>
        <div className="align-center">
          <h1>Hamburger</h1>
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
