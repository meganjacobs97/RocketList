import React from "react";

function TopCat(props) {
  const TopCats = props.name
  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center">{props.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
      {props.list ? (
          props.list.map((item) => (
            <a className="text-RocketJessie" href={`/category/${item.id}`}>
              <li
                key={item.id}
                className="state-rendered-item"
                data-name={item.name}
                id={item.id}
                onClick={() => {
                  props.selectCat(item.id);
                }}
              >
                {item.name}
              </li>
            </a>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>
    </div>
  );
}

export default TopCat;
