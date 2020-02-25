import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, View, Text} from 'react-native';


export default class BwScreen extends Component {
  render() {
    return (
      <View>
      <View styles={styles.buttonContainer}>
        <Button
          title="Auftrag"
          onPress={() => this.props.navigation.navigate('Der Auftrag')}/>
          <Button
          title="Organisation"
          onPress={() => this.props.navigation.navigate('Die Organisation')}/>
          <Button
          title="Mensch"
          onPress={() => this.props.navigation.navigate('Der Mensch')}/>
          <Button
          title="Reservist werden!"
          onPress={() => this.props.navigation.navigate('Reservist werden!')}/>
      </View>
      <View >
        <Text styles={{color: 'red'}}>Blog-Einträge und co</Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  buttonContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline:{
    alignItems: 'center',
    color: 'red',
  },
});