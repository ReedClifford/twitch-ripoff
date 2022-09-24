import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions";
import History from "../../History";
import Modal from "../../Modal";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  body = () => {
    return "Are you sure you want to delete this stream?";
  };
  renderedActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="bg-purple-900  px-10 py-2 rounded-md hover:bg-purple-800"
          onClick={() => this.props.deleteStream(id)}
        >
          Delete
        </button>
        <Link
          className="bg-gray-600 text-center px-10 py-2 rounded-md hover:bg-gray-500"
          to="/"
        >
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderBody = () => {
    return !this.props.stream ? (
      <React.Fragment>{this.body()}</React.Fragment>
    ) : (
      `Are you sure you want to delete the stream  (${this.props.stream.title})`
    );
  };

  render() {
    return (
      <div className="bg-zinc-900 text-slate-200 font-bold text-6xl text-start h-screen container p-10">
        <Modal
          title="Delete Stream"
          body={this.renderBody()}
          actions={this.renderedActions()}
          onDismiss={() => History.push("/")}
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
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
