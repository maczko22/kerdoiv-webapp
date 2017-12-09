import React, { Component } from 'react';
import Questionnaire from './Questionnaire'

class QuestionList extends Component {
  render() {
    return (
      <div>
         {this.props.types.map(type =>
         )} 
      </div>
    );
  }
}

export default QuestionList;
