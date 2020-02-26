import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity,Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class OrganisationScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{padding:20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{padding: 20}}>
        <Text>Blogbeitrag Mensch</Text>
        </View>
      </View>
      </ImageBackground>
    )
  }
}