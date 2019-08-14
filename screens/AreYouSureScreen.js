import React from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import {Redirect} from 'react-router-native';
import {Login} from '../features/network';

class AreYouSureScreen extends React.Component {

  state = {}

  loginForReal = ()=> this.setState({
    isRealyLoggedIn: true,
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Are you sure that you want to log in?
        </Text>
        <Button title="Log in for Real" onPress={this.loginForReal} />
        {this.state.isRealyLoggedIn ? (<Redirect to='/theLock' />) : null}
      </View>
    );
  }
}

export default AreYouSureScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
