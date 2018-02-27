import axios from 'axios';
import {
    SEND_LOGIN,
    SAVE_QLLIST,
    SAVE_QUESTIONNAIRES,
    FETCH_USER
} from './actionList';
import { loginUser } from '../util/index';
import { API } from '../middleware/index';

export const fetchQs = () => dispatch =>
    axios
        .get(`${URL}/kerdoivek`)
        .then(res => onSuccessfullReq(res, saveQuestionnaires, dispatch))
        .catch(logError);

export const fetchQL = () => dispatch =>
    axios
        .get(`${URL}/kerdoiv-lista`)
        .then(res => onSuccessfullReq(res, saveQuestionList, dispatch))
        .catch(logError);

export const saveQuestionList = qlList => ({
    type: SAVE_QLLIST,
    data: qlList
});

export const saveQuestionnaires = qlList => ({
    type: SAVE_QUESTIONNAIRES,
    data: qlList
});

export const fetchUser = () => async dispatch => {
    const res = await API.get('current-user');

    dispatch({ type: FETCH_USER, data: res });
};
