import React from 'react';


const Input = ({ setMessage, sendMessage, message }) => (
  <form className="flex border-solid border-2 rounded-b-lg
  ">
    <input
      className="p-5 w-4/5"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="bg-RocketRed hover:bg-red-800 p-xl text-white inline-block w-20p rounded-lg" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;