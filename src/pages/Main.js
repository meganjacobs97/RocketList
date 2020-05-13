import React from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";

function Main() {
  return (
    <VGrid size="12">
      <Col size="2">
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
          <div className="container rounded border-2 border-RocketJames divide-y-2 divide-RocketSteel">
            <h1 className="text-center">All categories</h1>
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
      <Col size="8">
        <h1 className="text-center">placeholder for posts</h1>
      </Col>
      <Col size="2">
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
