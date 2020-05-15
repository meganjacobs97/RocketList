import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = (
      <a
        href="#"
        className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
        onClick={(e) => { e.preventDefault()
        handleLogoutClick()}}
      >
        logout
      </a>
    );
  } else {
    button = (
      <a
        href="#"
        className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
        onClick={(e) => {e.preventDefault()
        handleLoginClick()}}
      >
        login
      </a>
    );
  }
  return button;
}

export default LoginControl;
