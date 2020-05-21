import React from "react";

function UnorderedList(props) {
  // const clickTest = (param) => {
  //   // console.log(event.target);
  //   const query = `{
  //     category(id: "${param}") {
  //       name
  //       _id
  //       subcategories {
  //         name
  //         _id
  //       }
  //     }
  //   }
  // `
  //   console.log(param);
  //   console.log(query);
  // };

  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
            <li
              key={item.id}
              className="state-rendered-item"
              id={item.id}
            >
              {item.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default UnorderedList;
