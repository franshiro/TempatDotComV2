import React, { Component } from "react";
import {
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import Api from '../screens/api'

const AppNavigator = createStackNavigator(
  {
    Home,
    Api,
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
