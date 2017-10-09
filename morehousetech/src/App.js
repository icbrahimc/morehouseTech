import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AuthenticationUI from './components/AuthenticationUI';

const loggerMiddleware = createLogger();

const store = createStore(
    applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware
    )
);

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <AuthenticationUI />
          </Provider>
        );
    }
}
export default App;
