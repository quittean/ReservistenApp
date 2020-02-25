import React, { Component } from 'react';
import { Icon, Button, View, Text, StyleSheet, Image, Linking, Card} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{width: '100%', fontSize: 50}}>Die Reservisten App</Text>
        </View>

        <View style={{flexDirection: 'row', borderWidth: 2, width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
         <TouchableOpacity onPress= {() => this.props.navigation.navigate('Bw')}>
            <Image style={styles.icon} source={require('../assets/iconbw.png')} />
            <Text style={styles.buttonText}>Die Reserve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.icon} source={require('../assets/iconboerse.png')} />
            <Text style={styles.buttonText}>Stellenangebote</Text>
          </TouchableOpacity> 
        </View>

        <View style={{flexDirection: 'row', borderWidth: 2, width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Cal')}>
            <Image style={styles.icon} source={require('../assets/iconcal.png')} />
            <Text style={styles.buttonText}>Veranstaltungen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress= {() => { Linking.openURL('https://bundeswehr.community')}}>
            <Image style={styles.icon} source={require('../assets/iconcommunity.png')} />
            <Text style={styles.buttonText}>Bw Community</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 23
  },
});
