import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Screen2 extends Component {
  static navigationOptions = () => ({
    title: 'Screen 2'
  });

  render() {
    const { navigation } = this.props;

    return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ padding: 10 }}>Click me to go back</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
