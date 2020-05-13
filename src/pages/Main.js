import React from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
// import TPoster from "../components/TPoster";

function Main() {
  return (
    <VGrid size="12">
      <Col size="2">
        <div className="grid invisible lg:visible">
          <TopCat name={"Rory"} />
          <br></br>
          <AllCat />
        </div>
      </Col>
      <Col size="8">
        <div className="border-2 border-RocketBlack container rounded">
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
        </div>
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
          {/* <TPoster name="Rory"/> */}
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
