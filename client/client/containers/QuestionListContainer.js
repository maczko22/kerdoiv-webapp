import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';
import { fetchQL } from '../actions/actions';

const mapStateToProps = state => {
    return {
        types: state.types
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchQL: () => dispatch(fetchQL())
    };
};

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(
    QuestionList
);

export default QuestionListContainer;
