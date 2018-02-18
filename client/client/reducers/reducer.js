import {
    LOGIN_USER,
    SAVE_QLLIST,
    SAVE_QUESTIONNAIRES
} from '../actions/actionList';
import initialState from './initial';

const reducer = (state = initialState, action) => {
    if (action.type === SAVE_QLLIST) {
        return Object.assign({}, state, action.data);
    }
    if (action.type === SAVE_QUESTIONNAIRES) {
        return Object.assign({}, state, action.data);
    }
    return state;
};

export default reducer;
