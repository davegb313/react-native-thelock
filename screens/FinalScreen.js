import React from 'react';
import {StyleSheet, TextInput, Button, Text, View, Image} from 'react-native';
import {Redirect} from 'react-router-native';
import {Login} from '../features/network';

class AreYouSureScreen extends React.Component {

  state ={}

  logout = ()=> this.setState({
    isRealyLoggedIn: true,
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Finnaly you are inside! You're happy, <Text style={{color: 'red'}}>mfk?</Text>
        </Text>
        <Image style={{width: 500, height: 300}}
          source={{uri: 'https://i.kym-cdn.com/photos/images/original/001/484/061/ea2.png'}}/>
        <Button title="Log out" onPress={this.logout} />
        {this.state.isRealyLoggedIn ? (<Redirect to='/' />) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  text: {
    marginLeft: 10,
    fontSize: 50,
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
export default AreYouSureScreen;
