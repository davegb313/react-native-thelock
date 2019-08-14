import React from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import {Redirect} from 'react-router-native';
import {Login} from '../features/network';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  setEmail = email => this.setState({email});
  setPassword = password => this.setState({password});

  login = () =>
    Login(this.state)
          .then(()=> this.setState({ isLoggedIn: true }))
          .catch(()=> this.setState({ isLoggedIn: false }));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder=" email"
          onChangeText={this.setEmail}
          placeholderTextColor="#227"
        />
        <Text style={styles.text}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          placeholder=" password"
          onChangeText={this.setPassword}
          placeholderTextColor="#227"
          secureTextEntry={true}
        />
        <Button title="Login" onPress={this.login} />
        {this.state.isLoggedIn ? (<Redirect to='/areYouSure' />) : null}
      </View>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  text: {
    marginLeft: 10,
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
