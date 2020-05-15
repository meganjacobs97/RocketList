import React, { useState } from "react";
import R from "./Photo/R.png";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <div>
      <div className="relative">
        <button className="block">
          <img src={R} alt="drop down menu"></img>
        </button>
        <div v-if="isOpen" className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-md">
          <a
            href="#"
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
          >
            support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
          >
            account settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
          >
            logout
          </a>
        </div>
      </div>
    </div>
  );
}
