import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
        <TextInput onChangeText={(text) => this.props.onClick(text)}></TextInput>
      </View>
    );
  }
}

export default App;
