import React from "react";
import { Link } from "react-router-dom";

function OrderedList(props) {
  const clickTest = (param) => {};

  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {props.list.map((item) => (
          <Link key={item.id} to={`/profile/${item.id}`}>
            <li className="state-rendered-item" id={item.id}>
              {item.name}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default OrderedList;
