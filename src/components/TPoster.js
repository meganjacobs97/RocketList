import React from "react";

function TPoster(props) {
    const name = props.name
      return (
    <div className="container rounded border-2 border-RocketRed">
      <h1 className="text-center">Top Posters</h1>
      <p {...name} />
    </div>
  );
}

export default TPoster;
