import React from 'react';

function back(){
  window.history.go(-2)
}

const InfoBar = ({ room }) => (
  <div className="flex item-center justify-between bg-RocketRed h-16 w-full rounded-t-lg">
    <div className="flex item-center ml-5p text-white">
      <h3 className="pt-4">Chat Room: ({room})</h3>
    </div>
    <div className="flex justify-end mr-5p pt-4 underline text-white hover:text-black">
      <button onClick={() => {back()}}>test</button>
    </div>
  </div>
);

export default InfoBar;