import React from "react";
import { Link } from "react-router-dom";

export default function Subcategory(props) {
  return (
    <div className="container rounded bg-white shadow-2xl divide-y-2 divide-RocketSteel">
      {props.category ? (
        <h1 className="text-center font-bold">
          Subcategories in <br />
          <Link
            className="text-RocketJessie hover:underline"
            to={`/category/${props.parentId}`}
          >
            {props.category}
          </Link>
        </h1>
      ) : (
        <h1 className="ml-4 mr-4 mb-1 text-center font-bold">
          Loading Subcategories...
        </h1>
      )}
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <Link
              key={item.id}
              className="text-RocketJames"
              to={`/category/${props.parentId}/subcategory/${item.id}`}
            >
              <li
                key={item.id}
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
