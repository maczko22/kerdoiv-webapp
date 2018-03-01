import React, { Component } from 'react';

export default class Question extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'radio',
            index: 1
        };
        this.funcMap = {
            radio: () => this.renderRadioOpt(),
            checkbox: () => this.renderCheckboxOpt(),
            text: () => this.renderTextOpt(),
            textarea: () => this.renderTextAreaOpt()
        };
    }

    onAddNewInput(makerFunc) {
        const items = [];

        for (let i = 0; i < this.state.index; i++) {
            items.push(makerFunc());
        }

        return items;
    }
    onAddNewInputClick() {
        this.setState({ index: this.state.index + 1 });
    }
    makeRadioJSX() {
        return (
            <div className="question-type-replicator">
                <input type="radio" className="form-control" />
                <input type="text" placeholder="Add meg a lehetséges választ..." className="form-control" />
                <button className="btn btn-warning btn-sm"> Törlés </button>
            </div>
        );
    }
    makeCheckboxJSX() {
        return (
            <div className="question-type-replicator">
                <input type="checkbox" className="form-control" />
                <input type="text" placeholder="Add meg a lehetséges választ..." className="form-control" />
                <button className="btn btn-warning btn-sm"> Törlés </button>
            </div>
        );
    }
    renderAddNewButton() {
        return (
            <button onClick={() => this.onAddNewInputClick()} className="btn btn-success btn-sm">
                + Opció hozzáadása
            </button>
        );
    }
    renderRadioOpt() {
        return (
            <div className="">
                {this.onAddNewInput(this.makeRadioJSX)}

                <div>{this.renderAddNewButton()}</div>
            </div>
        );
    }
    renderCheckboxOpt() {
        0;
        return (
            <div className="">
                {this.onAddNewInput(this.makeCheckboxJSX)}
                <div>{this.renderAddNewButton()}</div>
            </div>
        );
    }
    renderTextOpt() {
        return (
            <div className="">
                <input type="text" placeholder="Add meg a lehetséges választ..." className="form-control" />
            </div>
        );
    }

    renderTextAreaOpt() {
        return (
            <div className="">
                <textarea className="form-control" cols="20" rows="5" placeholder="Add meg a lehetséges választ..." />
            </div>
        );
    }

    onTypeChange(e) {
        this.setState({ selected: e.target.value });
    }

    renderType() {
        return this.funcMap[this.state.selected]();
    }
    render() {
        const questionTypes = [
            {
                type: 'radio',
                displayName: 'Egy választási lehetőség - Rádio gomb'
            },
            {
                type: 'checkbox',
                displayName: 'Több választási lehetőség - Checkbox'
            },
            { type: 'text', displayName: 'Szöveg bevitel(rövid) - Text' },
            {
                type: 'textarea',
                displayName: 'Szöveg bevitel(hosszű) - Textarea'
            }
        ];

        return (
            <div style={{ width: '100%' }}>
                <div className="question-input-card" index={this.props.index}>
                    <div className="question-label">
                        <label>Kérdés címe: </label>
                    </div>
                    <div className="question-input">
                        <input
                            onChange={e => this.props.onInputChange(e, `questions.questionTitle_${this.props.index}`)}
                            className="form-control"
                            type="text"
                            placeholder="Add meg a kérdés címét"
                            required={true}
                        />
                    </div>
                    <div className="question-label">
                        <label>Kérdés típusa: </label>
                    </div>
                    <div className="question-input">
                        <select className="form-control" onChange={e => this.onTypeChange(e)}>
                            {questionTypes.map((questionType, ind) => (
                                <option key={ind} value={questionType.type} selected={questionType.type === 'radio'}>
                                    {questionType.displayName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={e => this.props.deleteQuestion(e.target.dataset.index)}
                        className="btn btn-small btn-danger delete-question"
                        data-index={this.props.index}
                    >
                        X
                    </button>
                </div>

                {this.renderType()}
            </div>
        );
    }
}
