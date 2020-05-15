import React from "react";
import Col from "../components/Col";
import VGrid from "../components/VGrid";

function NoMatch() {
  return (
    <VGrid size="12">
      <Col lgsize="12" mobsize="12">
      <h1 className="text-center">Error: Page Not Found</h1>
      </Col>
    </VGrid>
  );
}

export default NoMatch;
