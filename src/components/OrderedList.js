import React from "react";
import { Link } from "react-router-dom";

function OrderedList(props) {
  const clickTest = (param) => {
    // console.log(event.target);
    //console.log(param);
  };

  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {props.list.map((item) => (
          <Link to={`/profile/${item.id}`} >
            <li
              className="state-rendered-item"
              id={item.id}
              onClick={() => {
                console.log(item.id)
                //props.selectItem(item.id);
              }}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default OrderedList;
