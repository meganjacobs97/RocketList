import React from "react";

function TopCat(props) {
  const TopCats = props.name
  return (
        <li>{TopCats}</li>
  );
}

export default TopCat;
