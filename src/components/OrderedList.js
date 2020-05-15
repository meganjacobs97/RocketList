import React from "react";

function OrderedList(props) {
  // {
  //   category: "",
  //   list: []
  // }

  const orderedList = props.list
  return (
    <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
      {orderedList.map(item => {
        <li>{item[props.category]}</li>
      })}
    </ol>
  );
}

export default OrderedList;
