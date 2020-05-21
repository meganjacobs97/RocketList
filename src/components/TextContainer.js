import React from 'react';


const TextContainer = ({ users }) => (
  <div className="flex flex-col ml-60 text-white h-60 justify-between mt-yy">
    {
      users
        ? (
          <div>
            <h1 className="mb-0 underline text-xl">People currently chatting:</h1>
            <div className="flex item-center mb-50">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="flex item-center">
                    <p className="text-green-400 text-lg">• </p> {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;