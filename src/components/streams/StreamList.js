import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderCreateBtn() {
    if (this.props.isSignedIn) {
      return (
        <Link
          className="bg-purple-900 rounded-md shadow-purple-900 shadow-md text-base w-full px-6 py-4"
          to="/streams/create"
        >
          Create Stream
        </Link>
      );
    }
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="flex justify-start gap-4 items-center my-3 max-w-2xl">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="bg-purple-900 rounded-md shadow-purple-900 shadow-md text-center text-base w-full px-4 py-2"
          >
            Edit
          </Link>

          <Link
            className="bg-gray-700 rounded-md shadow-gray-800 shadow-md text-base w-full px-4 py-2 text-center"
            to={`/streams/delete/${stream.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }
  renderedList() {
    return this.props.streams.map((stream) => {
      return (
        <div
          className="border-zinc-800 border-2 p-10  shadow-md my-5 shadow-zinc-800 flex justify-between items-center"
          key={stream.id}
        >
          <div>
            <Link
              to={`/streams/${stream.id}`}
              className="text-3xl font-bold text-slate-300"
            >
              {stream.title}
            </Link>
            <p className="text-2xl font-thin text-slate-400">
              {stream.description}
            </p>
          </div>

          <div className="w-3/12">{this.renderAdmin(stream)}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="bg-zinc-900 text-slate-200 font-bold text-6xl text-start h-full container p-10">
        <h1>Streams</h1>
        {this.renderedList()}
        <div className="text-end">{this.renderCreateBtn()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
