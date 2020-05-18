import React from 'react'

export default function Subcategory(props) {
  // const Subcategories = props.name
  // console.log(props)
  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center">Subcategories in {props.category}</h1>
      <ul className="list-none list-inside ml-4 mr-4 mb-1 text-center">
        {props.list ? (
          props.list.map((item) => (
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
