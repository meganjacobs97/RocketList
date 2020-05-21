import React from "react";

function VGrid(props) {
  const size = props.size
    .split(" ")
    .map((size) => "grid grid-cols-" + size + " gap-4")
    .join(" ");

  return <div className={`${size}`} {...props} />;
}

export default VGrid;