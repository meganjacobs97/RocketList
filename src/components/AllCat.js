import React from "react";
import { Link } from "react-router-dom";

function AllCat(props) {
  return (
    <div className="bg-white container rounded shadow-2xl divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <Link
              key={item.id}
              className="text-RocketJessie"
              to={`/category/${item.id}`}
            >
              <li
                className="state-rendered-item hover:underline"
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
