import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Login from './Login';
import Questionnaire from './Questionnaire';
import SubjectList from './SubjectList';
import QuestionnaireMakerMain from './QuestionnaireMakerMain';
import QuestionnaireMaker from './QuestionnaireMaker';
import Form from './Questionnaire/Form';
import Welcome from './Welcome';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/login" component={Login} />

                            <Route path="/tema-lista" component={SubjectList} />
                            <Route
                                path="/kerdoiv-keszites"
                                component={QuestionnaireMaker}
                            />
                            <Route
                                path="/kerdoiv/:id"
                                component={Questionnaire}
                            />
                            <Route path="/kerdoiv-form" component={Form} />
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
