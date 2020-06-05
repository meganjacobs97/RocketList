import React from "react";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      color: this.props.color,
    };
  }
  render() {
    return (
      <div className="container rounded bg-white shadow-2xl divide-y-2 divide-RocketSteel sweet-loading">
        {/* <ClipLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.loading}
        /> */}
        <ClimbingBoxLoader
          css={override}
          size={20}
          color={this.state.color}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
