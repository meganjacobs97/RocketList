import React from "react";
import { Link } from "react-router-dom";

function TopCat(props) {
  //sort categories
  let sorted = props;
  sorted.list.sort(function (a, b) {
    if (a.length > b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    }
    return 0;
  });

  return (
<<<<<<< HEAD
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel shadow-lg">
=======
    <div className="container rounded bg-white shadow-2xl divide-y-2 divide-RocketSteel">
>>>>>>> development
      <h1 className="text-center font-bold">{sorted.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {sorted.list ? (
          sorted.list.map((item) => (
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
      </ol>
    </div>
  );
}

export default TopCat;
