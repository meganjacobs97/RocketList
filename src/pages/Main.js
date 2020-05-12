import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
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
            <h1>All categories</h1>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <h1>test</h1>
      </div>
      <div className="col-span-3">
        <div className="grid invisible lg:visible">
          <div className="container rounded border-2 border-RocketJessie">
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
            <h1>Top categories</h1>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketRed">
            <h1>All categories</h1>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketRed">
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
