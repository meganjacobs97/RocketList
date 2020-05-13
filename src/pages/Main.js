import React from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";

function Main() {
  return (
    <VGrid size="12">
      <Col lgsize="2" mobsize="10" className="invisible lg:visible">
        <div className="grid">
          <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
          <div className="w-7 h-7 flex items-center justify-center">
            <h1 className="text-center">
              Top categories
            </h1>
            <svg
                  aria-hidden="true"
                  className="lg:invisible rounded-full border border-grey w-7 h-7 flex items-center justify-center"
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                </div>
            {/* make this into a list */}
            <div className="ml-4 mr-4 mb-1">
              <p>Top categories</p>
              <p>Top categories</p>
              <p>Top categories</p>
              <p>Top categories</p>
            </div>
          </div>
          <br></br>
          <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
          <div className="w-7 h-7 flex items-center justify-center">
            <h1 className="text-center">All categories</h1>
            <svg
                  aria-hidden="true"
                  className="lg:invisible rounded-full border border-grey w-7 h-7 flex items-center justify-center"
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                </div>
            {/* make this into a list */}
            <div className="ml-4 mr-4 mb-1">
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
      </Col>
      <Col lgsize="8" mobsize="10">
        <h1 className="text-center">placeholder for posts</h1>
      </Col>
      <Col lgsize="2" mobsize="10">
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
      </Col>
    </VGrid>
  );
}

export default Main;
