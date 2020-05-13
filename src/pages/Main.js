import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <div className="grid invisible lg:visible">
        <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
            <h1 className="text-center divide-y divide-RocketSteel">
              Top categories
            </h1>
            {/* make this into a list */}
            <div className="ml-4 mr-4 mb-1">
              <p>Top categories</p>
              <p>Top categories</p>
              <p>Top categories</p>
              <p>Top categories</p>
            </div>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketJames">
            <h1 className="text-center">All categories</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
              <p>Category</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-8">
        <h1 className="text-center">placeholder for posts</h1>
      </div>
      <div className="col-span-2">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2 border-RocketJessie">
            <h1 className="text-center">Top Point Holders</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketRed">
            <h1 className="text-center">Top Posters</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketRed">
            <h1 className="text-center">Mods</h1>
            {/* make this into a list */}
            <div className="ml-4 mb-1">
              <p>Rory</p>
              <p>Marlon</p>
              <p>Paul</p>
              <p>Dion</p>
              <p>Louis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
