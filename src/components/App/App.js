import React, { Component } from "react";
import "./App.css";
import Login from "../Login/Login";
import {
  login
} from "../../reducers/rootReducer";
import { connect } from "react-redux";
import Chat from "../Chat/Chat";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  login
};

class MainComponent extends Component {
  renderLogin = () => <Login onLogin={this.props.login} />;

  renderChat = () => <Chat />;

  renderContent = () => {
    return this.props.isLoggedIn ? this.renderChat() : this.renderLogin();
  };

  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
