import React from "react";

function TopCat(props) {
  const TopCats = props.name
  return (
    <div>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        <li>{TopCats}</li>
      </ol>
    </div>
  );
}

export default TopCat;
