import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2 border-RocketRed">
              <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
          <span className="text-grey-darkest font-thin text-xl">Top Categories</span>
                <svg
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
                </div>
            <h1>Anime/Manga</h1>
            <h1>Sports</h1>
            <h1>Lifestyle</h1>
            <h1>Technology/Electronics</h1>
            <h1>Misc</h1>
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
