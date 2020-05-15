import React from "react";

function OrderedList(props) {
  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center">{props.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        {props.list.map(item => 
          <li>{item}</li>
        )}
      </ol>
    </div>
  );
}

export default OrderedList;
