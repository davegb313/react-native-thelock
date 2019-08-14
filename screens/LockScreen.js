import React from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import {Login} from '../features/network';
import LockSvg from './LockSvg';
import {Redirect} from 'react-router-native';

class Lock extends React.Component {
  state = {
    numbers: [0, 0, 0, 0],
    secretCode: '1111',
  };

  changeValue = (index, diff) =>
    this.setState({
      numbers: this.state.numbers.map(
        (value, i) => i === index ? (value + diff + 10) % 10 : value,
      ),
    });

  check = () => {
    const userCode = this.state.numbers.reduce((p, c) => p + c.toString(), '');
    userCode === this.state.secretCode
      ? this.setState({isOpen: true})
      : this.setState({isOpen: false});
    setTimeout(()=> this.next(), 1000);
  };

  next = () => this.setState({next: true});


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Lock</Text>
        <Text style={styles.text}>
          The Lock is
          {' '}
          {this.state.isOpen
            ? <Text style={{color: 'green'}}>OPENED</Text>
            : <Text style={{color: 'red'}}>CLOSED</Text>}
        </Text>
        <LockSvg />
        <View style={styles.lockDigits}>
          {[...Array(4)].map((digit, i) => (
            <View key={i} style={styles.lockDigit}>
              <Button
                style={styles.button}
                onPress={() => this.changeValue(i, 1)}
                title="up"
              />
              <Text style={{textAlign: 'center'}}>{this.state.numbers[i]}</Text>
              <Button
                style={styles.button}
                onPress={() => this.changeValue(i, -1)}
                title="dn"
              />
            </View>
          ))}
        </View>
        <Button title="CHECK" onPress={this.check} />
        {this.state.next ? <Redirect to="/leFinal" /> : null}
      </View>
    );
  }
}

export default Lock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  lockDigits: {
    flex: 1,
    flexDirection: 'row',
  },
  lockDigit: {
    flex: 1,
    margin: 10,
  },
  button: {
    backgroundColor: 'hotpink',
  },
});
