import React, { Component } from 'react';
import QuestionnaireMakerMain from './QuestionnaireMakerMain';
import history from '../util/history';

class QuestionnaireMaker extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="subjects-landing-page">
                <div>
                    <span>Kérdőív készítő</span>
                    <button
                        onClick={() => history.replace('/kerdoiv-form')}
                        className="btn btn-sm btn-success"
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default QuestionnaireMaker;
