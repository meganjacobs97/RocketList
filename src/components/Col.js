import React from "react";

function Col(props) {
  const lgsize = props.lgsize
    .split(" ")
    .map((size) => "lg:col-span-" + size)
    .join(" ");

  const mobsize = props.mobsize
    .split(" ")
    .map((size) => "col-span-" + size)
    .join(" ");

  return <div className={`${lgsize} ${mobsize}`} {...props} />;
}

export default Col;
