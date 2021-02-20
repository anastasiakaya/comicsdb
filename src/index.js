import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ComicsApiService from './services/comicsapi-service';
import './index.scss';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { ComicsServiceProvider }  from './components/comics-service-context/';

import store from './store';

const comicsService = new ComicsApiService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ComicsServiceProvider value={comicsService}>
                <Router>
                    <App />
                </Router>
            </ComicsServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));
