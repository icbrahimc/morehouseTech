import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactNative, StyleSheet} from 'react-native';
import { Screen, Title, Text, TextInput, Divider, Button, Spinner, View } from '@shoutem/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center'
  }
})

class AuthenticationUI extends Component {
  render() {
    return (
      <Screen style={{alignItems: 'center', justifyContent: 'center'}}>
        <Title>Ibrahim</Title>
        <TextInput placeholder={'Username or email'} defaultValue={'Username or email'} />
      </Screen>
    )
  }
}

export default connect()(AuthenticationUI);
