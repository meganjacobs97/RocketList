import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from './TextContainer';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';

//for gql
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://rocket-list-server.herokuapp.com/'

  //get user id by checking token and comparing it to db
  const userToken = JSON.parse(localStorage.getItem("token"));
  const GET_CURRENT_USER = gql`
  query {
    currentUser(token: "${userToken}") {
        _id
        username
      }
  }
`;

  const {
      loading: currUserLoading,
      error: currUserError,
      data: currUserData,
  } = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    const { room } = queryString.parse(location.search);
    

    //query for username 
    // Queries database to get user info based on logged in user (token)
     

    socket = io(ENDPOINT);

    setRoom(room);
    if(currUserData) {
      console.log(currUserData)
      setName(currUserData.currentUser.name)
    }
    else {
      setName(name); 
    }
    

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="bg-gray-900 flex justify-center item-center h-vh">
      <div className="text-2xl flex flex-col justify-between rounded-lg w-3/5 bg-gray-200 h-xx my-yy">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
