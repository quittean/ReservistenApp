import React, { Component } from 'react';
import { Icon, Button, View, Text, StyleSheet, Image, Linking, Card} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={{}}>Die Reservisten App</Text>

         <TouchableOpacity onPress= {() => this.props.navigation.navigate('Die Reserve der Bundeswehr')}>
            <Image style={styles.button} source={require('../assets/iconbw.png')} />
            <Text>Die Reserve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.button} source={require('../assets/iconboerse.png')} />
            <Text>Stellenangebote</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Cal')}>
            <Image style={styles.button} source={require('../assets/iconcal.png')} />
            <Text>Veranstaltungskalender</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress= {() => { Linking.openURL('https://bundeswehr.community')}}>
            <Image style={styles.button} source={require('../assets/iconcommunity.png')} />
            <Text>Bundeswehr Community</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50
  },
});
