import React, { Component } from 'react';
import QuestionnaireMakerMain from './QuestionnaireMakerMain';

class QuestionnaireMaker extends Component {
    componentDidMount() {
        if (typeof this.props.fetchQs === 'function') this.props.fetchQs();
    }
    render() {
        return (
            <div className="subjects-landing-page">
                <div>
                    <span>Kérdőív készítő</span>
                    <button className="btn btn-sm btn-success">+</button>
                </div>
                {this.props.questionnaires ? (
                    <QuestionnaireMakerMain
                        questionnaires={this.props.questionnaires}
                    />
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default QuestionnaireMaker;
