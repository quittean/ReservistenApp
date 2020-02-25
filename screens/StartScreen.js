import React, { Component } from 'react';
import { Icon, Button, View, Text, StyleSheet, Image, Linking, Card} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{alignItems: ''}}>
          <Text>Die Reservisten App</Text>
        </View>

<<<<<<< HEAD
         <TouchableOpacity onPress= {() => this.props.navigation.navigate('Die Reserve der Bundeswehr')}>
            <Image style={styles.button} source={require('../assets/iconbw.png')} />
=======
        <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableOpacity onPress= {() => this.props.navigation.navigate('Bw')}>
            <Image style={styles.icon} source={require('../assets/iconbw.png')} />
>>>>>>> 4b441bc61a17a4f20f9b2b98fd6ef2a94ee20572
            <Text>Die Reserve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.icon} source={require('../assets/iconboerse.png')} />
            <Text>Stellenangebote</Text>
          </TouchableOpacity> 
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Cal')}>
            <Image style={styles.icon} source={require('../assets/iconcal.png')} />
            <Text>Veranstaltungskalender</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress= {() => { Linking.openURL('https://bundeswehr.community')}}>
            <Image style={styles.icon} source={require('../assets/iconcommunity.png')} />
            <Text>Bundeswehr Community</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 50
  },
});
