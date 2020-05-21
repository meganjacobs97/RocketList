import React from "react";

function Mods(props) {
  const mod = props.name;
  return (
    <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
      <h1 className="text-center">Mods</h1>
      <ul className="ml-4 mr-4 mb-1 text-center">
        <li>{mod}</li>
      </ul>
    </div>
  );
}

export default Mods;
