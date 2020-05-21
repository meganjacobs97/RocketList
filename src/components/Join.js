import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function SignIn() {
  const urlPath = window.location.pathname
  const splitUrl = urlPath.split("/")
  const newRoom = splitUrl[2]
  const user = JSON.parse(localStorage.getItem("username")); 

  const [name, setName] = useState(user); // username
  const [room, setRoom] = useState(newRoom); // post unqiue id

  return (
      <div className="display-flex justify-center text-center item-center h-vh bg-white">
        <div>
          <h1 className="text-4xl">Entering Chat Room:</h1>
          <br/>
          <h3 className="text-3xl">{room}</h3>
        </div>
        <br/>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button bg-RocketRed hover:bg-red-800 text-white font-bold p-xl rounded-fiv inline-block w-1/'} type="submit">Join Chat</button>
        </Link>
      </div>
  );
}