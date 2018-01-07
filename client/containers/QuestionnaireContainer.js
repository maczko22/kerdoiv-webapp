import { connect } from 'react-redux';
import Questionnaire from '../components/Questionnaire';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const QuestionnaireContainer = connect(mapStateToProps, mapDispatchToProps)(
  Questionnaire
);

export default QuestionnaireContainer;
