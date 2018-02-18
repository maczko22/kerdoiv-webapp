import axios from 'axios';
import { SEND_LOGIN, SAVE_QLLIST, SAVE_QUESTIONNAIRES } from './actionList';
import { loginUser } from '../util/index';
const URL = 'http://localhost:8080';

export const sendLogin = user => {
    return dispatch => {
        return axios
            .post(`${URL}/login`, {
                body: user
            })
            .then(res => {
                if (res.data.success) {
                    loginUser();
                    window.location = '/#/kerdoiv-lista';
                } else {
                    alert('Rossz felhasználónév/jelszó!');
                }
            })
            .catch(logError);
    };
};
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

const onSuccessfullReq = (res, actionToCall, dispatch) => {
    if (isReqSuccessful(res)) {
        console.log('Action to call:', actionToCall);
        console.log('Data:', res);
        dispatch(actionToCall(res.data));
        return;
    }

    logError(res);
};

const isReqSuccessful = res => res.status === 200;

const logError = res => console.error(res.statusText);
