import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from '../components/Login';
import Questionnaire from '../containers/QuestionnaireContainer';
import QuestionList from '../containers/QuestionListContainer';
import QuestionnaireMaker from '../containers/QuestionnaireMakerContainer';
import Welcome from './Welcome';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../util/index';
import history from '../util/history';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar logoutUser={logoutUser} isLoggedIn={isLoggedIn} />
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/login" component={Login} />
                            <Route
                                path="/kerdoiv/:id"
                                component={Questionnaire}
                            />
                            <Route
                                path="/kerdoiv-lista"
                                component={QuestionList}
                            />
                            <Route
                                path="/kerdoiv-keszites"
                                component={QuestionnaireMaker}
                            />
                            <Route
                                render={() => (
                                    <div className="landing-page">
                                        <div className="card card-404">
                                            <h1>404</h1>
                                            <p>
                                                A keresett oldal nem található.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            />
                        </Switch>
                    </div>
                    <footer className="footer">
                        <div className="mui-container-fluid" />
                    </footer>
                </div>
            </Router>
        );
    }
}
export default connect(null, actions)(App);
