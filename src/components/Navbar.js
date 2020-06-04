import React from "react";
import Menu from "./Menu";
import Logo from "./Photo/Logo.png";
import rocket from "./Photo/logo-rocket.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../actions";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div id="top-of-page" className="grid grid-rows-1">
      <div id="header" className="flex justify-between">
        <div className="flex align-center">
          <Link
            to="/"
            onClick={() => {
              dispatch(RESET());
            }}
          >
            <div className="logo-container" id="logo-container">
              <img
                src={Logo}
                className="object-center ml-2 h-40"
                id="rocketlist-logo"
                alt="logo"
              />
              <img
                src={rocket}
                className="object-center ml-2 h-40"
                id="rocketlist-rocket"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex align-center">{isLoggedIn ? <Menu /> : ""}</div>
      </div>
    </div>
  );
}
