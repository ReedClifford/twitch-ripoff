import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <StreamForm
          h1="Create Stream"
          onSubmit={this.onSubmit}
          btn="Create Stream"
        />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
