import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import App from './components/App';
import thunkMiddleware from 'redux-thunk';
import { Login, Questionnaire } from './middleware/index';
import { isEmpty } from './util/index';
window.isEmpty = isEmpty;

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);

/* Login.sendCredentials({ username: 'Viktor', password: 'tests' })
    .then(data => console.log(data))
    .catch(e => console.log(e)); */

Questionnaire.getById(10).then(console.log);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
