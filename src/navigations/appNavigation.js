import React, { Component } from "react";
import {
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import Detail from '../screens/detail'

const AppNavigator = createStackNavigator(
  {
    Home,
    Detail,
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
