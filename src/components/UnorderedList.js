import React from "react";

function UnorderedList(props) {
  const clickTest = (param) => {
    // console.log(event.target);
    console.log(param);
  };

  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center">{props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <li
              className="state-rendered-item"
              id={item.id}
              onClick={() => {
                clickTest(item.id);
              }}
            >
              {item.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default UnorderedList;
