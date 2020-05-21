import React from "react";

function TPoster(props) {
  const name = props.name;
  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center">Top Posters</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        <li>{name}</li>
      </ol>
    </div>
  );
}

export default TPoster;
