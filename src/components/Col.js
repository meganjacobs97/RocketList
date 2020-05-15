import React from "react";

export default function Col(props) {
  const visibility = props.visibility;
  const lgsize = props.lgsize
    .split(" ")
    .map((size) => "lg:col-span-" + size)
    .join(" ");
    if(props.mobsize) {
      const mobsize = props.mobsize
      .split(" ")
      .map((size) => "col-span-" + size)
      .join(" ");
      return <div className={`${lgsize} ${mobsize} ${visibility}`} {...props} />;
    }
    return <div className={`${lgsize} ${visibility}`} {...props} />;
}