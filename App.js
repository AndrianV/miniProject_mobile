import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import LoginScreen from './Login';
import MapScreen from './Map';
import BlogScreen from './Blog';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  MapScreen: {screen: MapScreen},
  BlogScreen: {screen: BlogScreen}
});