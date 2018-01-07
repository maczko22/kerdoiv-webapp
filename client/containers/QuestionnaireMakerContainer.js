import { connect } from 'react-redux';
import QuestionnaireMaker from '../components/QuestionnaireMaker';

const mapStateToProps = state => {
  return {
    questionnaires: state.questionnaires
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const QuestionnaireMakerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireMaker);

export default QuestionnaireMakerContainer;
