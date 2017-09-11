import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(window.location.pathname);
    return (
      <div>
        <input type="text" />
        <input type="password" />
        <Link className="btn btn-primary" to="/messenger">
          asdasd
        </Link>
      </div>
    );
  }
}
export default Login;
