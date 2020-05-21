import React from "react";
import { Link } from "react-router-dom";

function AllCat(props) {
  // const clickToLoad = () => {
  //   console.log("loaded?");
  // };

  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
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
      </ul>
    </div>
  );
}

export default AllCat;
