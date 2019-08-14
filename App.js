import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Switch, Route, Link} from 'react-router-native';
import LoginScreen from './screens/LoginScreen';
import AreYouSureScreen from './screens/AreYouSureScreen';
import LockScreen from './screens/LockScreen';
import FinalScreen from './screens/FinalScreen';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/areYouSure' component={AreYouSureScreen} />
          <Route exact path='/theLock' component={LockScreen} />
          <Route exact path='/leFinal' component={FinalScreen} />
        </Switch>
      </NativeRouter>
    );
  }
}
export default App;
