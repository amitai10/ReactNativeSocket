
import {Provider} from "react-redux";
import {createStore} from "redux";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './shared/containers/AppContainer';
import App from './shared/components/App';
import configureStore from "./shared/configureStore";

const store = configureStore();

class SocketExample extends Component {
  render() {
    return <Provider store={store}>
        <AppContainer />
      </Provider>
  }
}

// render() {
//   return <Provider store={store}>
//     <AppContainer />
//   </Provider>
// }

AppRegistry.registerComponent('SocketExample', () => SocketExample);
