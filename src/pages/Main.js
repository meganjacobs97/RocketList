import React from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";
import TopCat from "../components/TopCat";
import AllCat from "../components/AllCat";
import TPoints from "../components/TPoints";
import TPoster from "../components/TPoster";
import Mods from "../components/Mods";

function Main() {
  return (
    <VGrid size="12">
      <Col lgsize="2" visibility="hidden lg:block">
        <div className="grid invisible lg:visible">
          <TopCat name={"Rory"} />
          <br></br>
          <AllCat />
        </div>
      </Col>
      <Col lgsize="6" mobsize="10" visibility="col-start-2 lg:col-start-4">
        <div className="border-2 border-RocketBlack container rounded">
          <h1 className="text-center">Marlon!</h1>
          <h1 className="text-center">placeholder for posts</h1>
          <h1 className="text-center">placeholder for posts</h1>
        </div>
      </Col>
      <Col lgsize="2" mobsize="10" visibility="lg:col-start-11">
        <div className="grid invisible lg:visible">
          <TPoints name={"Paul"} />
          <br></br>
          <TPoster name={"Dion"} />
        </div>
        <br></br>
        <Mods name={"Louis"} />
      </Col>
    </VGrid>
  );
}

export default Main;
