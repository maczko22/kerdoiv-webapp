import React, { Component } from "react";
import MessengerContainer from "../containers/MessengerContainer";

const App = ({ doMagic, test }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 text-center">
        <MessengerContainer />
      </div>
    </div>
  </div>
);
export default App;
