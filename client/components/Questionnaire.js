import React, { Component } from 'react';

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionnaire: null
    };
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await fetch(`/kerdoiv/${id}`);
    const data = await res.json();
    console.log(data);

    this.setState({ questionnaire: data[0] });
  }
  render() {
    const { questionnaire } = this.state;
    if (questionnaire === null || questionnaire === undefined) {
      return (
        <div>
          <h2>Loading....</h2>
        </div>
      );
    }
    return <div className="card"> {questionnaire.title}</div>;
  }
}

export default Questionnaire;
