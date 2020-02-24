import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class StartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button
          title="Die Reserve"
          onPress={() => this.props.navigation.navigate('Bw')}
          />
          <Button
          title="Stellenangebote"
          onPress={() => this.props.navigation.navigate('Boerse')}
          />
          <Button
          title="Veranstaltungskalender"
          onPress={() => this.props.navigation.navigate('Cal')}
          />
      </View>
    )
  }
}