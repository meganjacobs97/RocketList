import React from "react";

export default function Navbar() {
  return (
    <div id="top-of-page" className="grid grid-rows-2">
      <div id="header" className="flex justify-around">
        <div className="flex align-center">
          <h1 className="text-2xl">RocketList</h1>
          <img
            className="object-none object-top h-6 w-6 m-auto m-l-12"
            src="http://placekitten.com/g/200/300"
            alt="logo"
          />
        </div>
        {/* <div> */}
        <h1 className="align-center">Hamburger</h1>
        {/* </div> */}
      </div>
      <div id="navbar" className="flex flex-col">
        <div>
          <h1 className="flex justify-center">Welcome to RocketList!</h1>
        </div>
        <div className="flex flex-row justify-around">
          <div>Explore</div>
          <div>Answer</div>
          <div>Ask</div>
        </div>
      </div>
    </div>
  );
}
