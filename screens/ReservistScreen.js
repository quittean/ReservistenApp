import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ReservistScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Blogbeitrag Mensch</Text>
      </View>
      </ImageBackground>
    )
  }
}