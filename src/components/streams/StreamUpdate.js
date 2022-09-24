import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamUpdate extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return (
        <div className="text-slate-300 font-bold">
          <h1>Loading.....</h1>
        </div>
      );
    }
    console.log(this.props);
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          h1="Edit Stream"
          btn="Edit Stream"
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamUpdate
);
