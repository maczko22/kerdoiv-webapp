import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from '../containers/LoginContainer';
import Questionnaire from '../containers/QuestionnaireContainer';
import QuestionList from '../containers/QuestionListContainer';
import QuestionnaireMaker from '../containers/QuestionnaireMakerContainer';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../util/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar logoutUser={logoutUser} isLoggedIn={isLoggedIn} />
          <Route exact path="/" component={Login} />
          <Route path path="/kerdoiv/:id" component={Questionnaire} />
          <Route exact path="/kerdoiv-lista" component={QuestionList} />
          <Route
            exact
            path="/kerdoiv-keszites"
            component={QuestionnaireMaker}
          />
        </div>
      </Router>
    );
  }
}
export default App;
