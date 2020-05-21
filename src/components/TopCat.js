import React from "react";
import { Link } from "react-router-dom";

function TopCat(props) {
  console.log("top cat",props)
  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <Link className="text-RocketJessie" to={`/category/${item.id}`}>
              <li
                key={item.id}
                className="state-rendered-item"
                data-name={item.name}
                id={item.id}
              >
                {item.name}
              </li>
            </Link>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>
    </div>
  );
}

export default TopCat;
