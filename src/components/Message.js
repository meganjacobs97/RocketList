import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  if(user === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="flex justify-end pt-0 pr-5 mt-sm">
          <p className="flex items-center text-gray-500 tracking-wide pr-md text-sm">{name}</p>
          <div className="rounded-twen bg-RocketRed py-sm px-xl inline-block max-w-xl">
            <p className="w-full tracking-normal float-left text-base break-words text-white">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="flex justify-start pt-0 pl-5 mt-sm">
            <div className="rounded-twen py-sm px-xl inline-block max-w-xl bg-gray-300">
              <p className="w-full tracking-normal float-left text-base break-words text-black">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="flex items-center text-sm text-gray-500 .tracking-wide pl-md">{user}</p>
          </div>
        )
  );
}

export default Message;