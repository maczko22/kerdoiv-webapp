import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import QuestionListContainer from '../containers/QuestionListContainer';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/kerdoiv-lista"
            component={QuestionListContainer}
          />
        </div>
      </Router>
    );
  }
}
export default App;
