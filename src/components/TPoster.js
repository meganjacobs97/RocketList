import React from "react";
import { Link } from "react-router-dom";

function TPoster(props) {
  const name = props.name;
  return (
    <div className="container rounded bg-white shadow-2xl divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">Top Posters</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <Link key={item.id} to={`/profile/${item.id}`}>
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

export default TPoster;
