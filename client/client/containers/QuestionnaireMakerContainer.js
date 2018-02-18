import { connect } from 'react-redux';
import QuestionnaireMaker from '../components/QuestionnaireMaker';
import { fetchQs } from '../actions/actions';

const mapStateToProps = state => {
    return {
        questionnaires: state.questionnaires
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQs: dispatch(fetchQs())
    };
};

const QuestionnaireMakerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionnaireMaker);

export default QuestionnaireMakerContainer;
