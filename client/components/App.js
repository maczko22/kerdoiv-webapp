import React, { Component } from "react";
import MessengerContainer from "../containers/MessengerContainer";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MessengerContainer} />
        </div>
      </Router>
    );
  }

  /*
  render() {
    console.log(window.location.href);
    console.log(window.location.href.split("#")[1] == "/");
    if (window.location.pathname == "/") {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <Login />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <MessengerContainer />
          </div>
        </div>
      </div>
    );
  }*/
}
export default App;
