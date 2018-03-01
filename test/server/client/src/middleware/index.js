import axios from 'axios';

const API_ENDPOINT = '/api/';

export const API = {
    get: (endpoint, params) =>
        axios
            .get(`${API_ENDPOINT}${endpoint}`)
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
    sendCredentials: user => API.post('login', user)
};

export const Questionnaire = {
    getAll: () => API.get('questionnaires'),
    getById: id => API.get('questionnaire', { id })
};

export const Subject = {
    getAll: () => API.get('subjects')
};
