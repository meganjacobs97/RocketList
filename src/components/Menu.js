import React, { useState } from "react";
import { Link } from "react-router-dom";
import R from "./Photo/R.png";
import Popper from "popper.js";
import { useDispatch } from "react-redux";
import { SIGN_IN, RESET } from "../actions";
import client from "../apollo-client";
import OutsideClickCapture from "./OutsideClickCapture";

export default function Hamburger() {
  const dispatch = useDispatch();
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const UserId = JSON.parse(localStorage.getItem("userId"));

  return (
    <OutsideClickCapture handler={closeDropdownPopover}>
      <div className="relative">
        <button
          type="button"
          style={{ transition: "all .15s ease" }}
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
          className="block"
        >
          <img src={R} alt="drop down menu"></img>
        </button>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "text-base z-50 float-left list-none text-left right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-md"
          }
        >
          {/* <a
            href="#"
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
            onClick={(e) => e.preventDefault()}
          >
            support
          </a>
          <Link
            to={`/account/${UserId}`}
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
          >
            account settings
          </Link> */}
          <Link
            to="/"
            className="block px-4 py-2 text-RocketBlack hover:bg-RocketMeowth"
            onClick={(e) => {
              client.clearStore();
              localStorage.clear();
              dispatch(RESET());
              dispatch(SIGN_IN());
            }}
          >
            logout
          </Link>
        </div>
      </div>
    </OutsideClickCapture>
  );
}
