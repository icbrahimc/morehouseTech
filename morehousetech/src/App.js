import React, { Component } from 'react';
import ReactNative from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';
import LoginUI from './components/LoginUI';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware
    )
);

class App extends Component {
    render() {
        return (
          // <Screen style={{alignItems: 'center', justifyContent: 'center'}}>
          //   <Title>Ibrahim</Title>
          // </Screen>
          <Provider store={store}>
            <LoginUI />
          </Provider>
        );
    }
}
export default App;
