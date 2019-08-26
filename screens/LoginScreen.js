import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, Text, View} from 'react-native';
import {Redirect} from 'react-router-native';
import {Login, SignUp} from '../features/network';
import * as Facebook from 'expo-facebook';
const FACEBOOK_APP_ID = '369986960565720';



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
          .catch((err)=> console.log(err) || this.setState({ isLoggedIn: false }));

  signup = () =>
    SignUp(this.state)
          .then(()=> this.setState({ isLoggedIn: true }))


  logIn = ()=> {
      Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions: ['public_profile'],
        behavior: 'native',
      }).then(({
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      })=>{
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          fetch(`https://graph.facebook.com/me?access_token=${token}`)
            .then(response=> response.text())
            .then(text=> console.log(text))
        } else {
          // type === 'cancel'
          console.log('the govt is corrupt');
        }
      });
  }




  render() {
    return (
      <View style={styles.container}>
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
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.button} onPress={this.login} >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.signup} >
            <Text>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.logIn} >
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
          {this.state.isLoggedIn ? (<Redirect to='/areYouSure' />) : null}
        </View>
      </View>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ada8',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    margin: 10,
    height: 50,
    width: 350,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
  },
  button: {
    height: 60,
    width: 100,
    borderRadius: 30,
    backgroundColor: '#c21002',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
