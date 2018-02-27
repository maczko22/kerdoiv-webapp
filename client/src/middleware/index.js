import axios from 'axios';
import { loginUser, logoutUser } from '../util';
const API_ENDPOINT = 'http://localhost:8080/';

export const API = {
    get: (endpoint, params) =>
        axios
            .get(`${API_ENDPOINT}${endpoint}`, { params })
            .then(onSuccessfulResponse)
            .catch(onError),
    post: (endpoint, body) =>
        axios
            .post(`${API_ENDPOINT}${endpoint}`, { body })
            .then(onSuccessfulResponse)
            .catch(onError)
};

function onSuccessfulResponse(res) {
    return res.status === 200 ? res.data : null;
}

function onError(error) {
    console.error(error);
    return null;
}

export const Login = {
    sendCredentials: user => API.post('login', user),
    loginUser: () => loginUser(),
    logoutUser: () => logoutUser()
};

export const Questionnaire = {
    getAll: () => API.get('questionnaires'),
    getById: id => API.get('questionnaire', { id })
};

export const Subject = {
    getAll: () => API.get('subjects')
};
