import React from "react";
import R from "./Photo/R.png";

export default function Hamburger() {
  return (
    <div>
      <div>
        <button className="block">
          <img src={R} alt="avatar"></img>
        </button>
      </div>
      <div>
        <a href="#">account settings</a>
        <a href="#">support</a>
        <a href="#">logout</a>
      </div>
    </div>
  );
}
