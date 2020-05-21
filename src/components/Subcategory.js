import React from "react";
import { Link } from "react-router-dom";

export default function Subcategory(props) {
  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      {props.category ? (
        <h1 className="text-center font-bold">
          Subcategories in{" "}
          <Link
            className="text-RocketJessie"
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
  // return (
  //   <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
  //     <h1 className="text-center">
  //       Subcategories in {props.parent_category}
  //     </h1>
  //     <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
  //       <li>{Subcategories}</li>
  //     </ol>
  //   </div>
  // )
}
