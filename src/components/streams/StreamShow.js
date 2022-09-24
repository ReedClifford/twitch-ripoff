import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div className="text-slate-200 h-screen">Loading</div>;
    }
    return (
      <div className=" text-start h-screen p-5">
        <h1 className="text-6xl font-bold text-slate-50 my-5">
          {this.props.stream.title}
        </h1>
        <p className="font-xl text-slate-200">
          {this.props.stream.description}
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
