import React, { Component } from 'react';
import Questionnaire from './Questionnaire';

class QuestionList extends Component {
    constructor() {
        super();
        this.state = {
            open: null
        };
    }

    componentDidMount() {}

    toggleItem(ind) {
        if (this.state.open === ind) {
            this.setState({ open: null });
            return;
        }
        this.setState({ open: ind });
    }
    getItem(item, ind) {
        return (
            <div
                key={ind}
                onClick={e => this.toggleItem(ind)}
                key={ind}
                className={`card subject ${
                    this.state.open === ind ? 'open' : ''
                }`}
            >
                <div>
                    <span>{item.displayName}</span>
                    <button
                        className="btn"
                        style={{ float: 'right', cursor: 'pointer' }}
                    >
                        Tovább
                    </button>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="subjects-landing-page">
                {this.props.types
                    ? this.props.types.map((item, ind) =>
                          this.getItem(item, ind)
                      )
                    : ''}
            </div>
        );
    }
}

export default QuestionList;
