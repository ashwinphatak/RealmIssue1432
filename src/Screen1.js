import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Screen1 extends Component {
  static navigationOptions = () => ({
    title: 'Screen 1'
  });
  
  render() {
    const { navigation } = this.props;

    return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      >
        <Text style={{ padding: 10 }}>Click me to go to Screen 2</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
