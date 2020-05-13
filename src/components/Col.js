import React from "react";

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-span-" + size)
    .join(" ");

  return <div className={size} {...props} />;
}

export default Col;
