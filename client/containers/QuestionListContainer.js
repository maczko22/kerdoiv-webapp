import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';

const mapStateToProps = state => {
  return {
    types: [
      {
        name: 'math',
        displayName: 'Matematika',
        teachers: ['Pista', 'Marika', 'Faszúr', 'Faszfej', 'Puncinő']
      },
      {
        name: 'asd',
        displayName: 'Fasztudja',
        teachers: ['Pista', 'Marika', 'Faszúr', 'Faszfej', 'Puncinő']
      },
      {
        name: 'hungarian',
        displayName: 'Magyar',
        teachers: ['Pista', 'Marika', 'Faszúr', 'Faszfej', 'Puncinő']
      },
      {
        name: 'physics',
        displayName: 'Fizika',
        teachers: ['Pista', 'Marika', 'Faszúr', 'Faszfej', 'Puncinő']
      },
      {
        name: 'bio',
        displayName: 'Biológia',
        teachers: ['Pista', 'Marika', 'Faszúr', 'Faszfej', 'Puncinő']
      }
    ]
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(
  QuestionList
);

export default QuestionListContainer;
