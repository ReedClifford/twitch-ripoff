import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import Google from "../assets/google.svg";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1058729373962-vvi7htgtbmu2oe2hrn494o5uunugv1db.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "twitch-clone-pog",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    return isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="bg-purple-600 text-slate-50 px-8 py-2 rounded-sm hover:bg-purple-900"
          onClick={this.onSignOutClick}
        >
          Logout
        </button>
      );
    } else {
      return (
        <button
          className="bg-purple-600 text-slate-50 w-full px-8 py-2 rounded-sm hover:bg-purple-900 flex justify-between gap-2 items-center"
          onClick={this.onSignInClick}
        >
          <img src={Google} alt="google" className="w-7" />
          Sign in With Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
