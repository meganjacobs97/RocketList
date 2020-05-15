import React from "react";

function UnorderedList(props) {
  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center">{props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list.map(item => 
          <li>{item}</li>
        )}
      </ul>
    </div>
  );
}

export default UnorderedList;
