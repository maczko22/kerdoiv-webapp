import React, { Component } from 'react';
import Question from './Question';

class Form extends Component {
    state = {
        index: 0,
        title: '',
        description: '',
        questions: {}
    };

    componentDidMount() {
        this.onAddQuestionClick();
    }

    onInputChange(e, target) {
        this.setState({ [target]: e.target.value }, () => console.log(this.state.questions));
    }

    deleteQuestion(itemIndex) {
        // let deletionIndex = this.state.questions.findIndex(question => question.props.index === Number(itemIndex));
        console.log('item to delete ', itemIndex);
        /*  let newArr = Object.assign([], this.state.questions);
        newArr.splice(deletionIndex, 1);

        //TODO: meg kell fixálni ezt, valamiért mindíg az utolsó elemet törli ki
        this.setState({
            questions: newArr
        }); */
    }
    onAddQuestionClick() {
        this.setState({ index: this.state.index + 1 });
    }

    renderQuestions() {
        const items = [];

        for (let i = 0; i < this.state.index; i++) {
            items.push(
                <Question
                    key={i}
                    index={i}
                    onInputChange={(e, type) => this.onInputChange(e, type)}
                    deleteQuestion={index => this.deleteQuestion(index)}
                />
            );
        }

        return items;
    }
    render() {
        return (
            <div>
                <div className="subjects-landing-page">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <div className="card">
                                <div
                                    className="card-header text-center row"
                                    style={{
                                        marginLeft: '0px',
                                        marginRight: '0px'
                                    }}
                                >
                                    <div className="col-sm-2 offset-sm-1">
                                        <label>Kérdőív címe: </label>
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.title}
                                            onChange={e => this.onInputChange(e, 'title')}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="card-block row"
                                    style={{
                                        marginLeft: '0px',
                                        marginRight: '0px'
                                    }}
                                >
                                    <div className="col-sm-3">
                                        <label>
                                            <h4>Kérdőív leírása:</h4>
                                        </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            placeholder="Add meg a kérdőív leírását"
                                            onChange={e => this.onInputChange(e, 'description')}
                                        />
                                    </div>
                                    {this.renderQuestions()}
                                    <div className="question-input-card">
                                        <button
                                            onClick={() => this.onAddQuestionClick()}
                                            className="btn btn-warning btn-block"
                                        >
                                            + Új kérdés hozzáadás
                                        </button>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button onClick={() => console.log('click')} className="btn btn-success btn-block">
                                        Elküldés
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
