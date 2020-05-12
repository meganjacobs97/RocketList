import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2">
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
          </div>
          <br></br>
          <div className="container rounded border-2">
            <h1>All categories</h1>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <h1>test</h1>
      </div>
      <div className="col-span-3">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2">
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
          </div>
          <br></br>
          <div className="container rounded border-2">
            <h1>All categories</h1>
          </div>
          <br></br>
          <div className="container rounded border-2">
            <h1>All categories</h1>
            <h1>All categories</h1>
            <h1>All categories</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
