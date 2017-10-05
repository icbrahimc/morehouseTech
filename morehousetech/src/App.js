import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';

class App extends Component {
    render() {
        return (
          <Screen style={{alignItems: 'center', justifyContent: 'center'}}>
            <Title>Ibrahim</Title>
            <Divider />
            <Title>Jorja Smith</Title>
            <Divider />
          </Screen>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default App;
