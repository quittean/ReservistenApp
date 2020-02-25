import React, { Component } from 'react';
import { Icon, Button, View, Text, StyleSheet, Image, Linking, Card, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{width: '100%', fontSize: 35, color: 'white'}}>Die Reservisten App</Text>
        </View>

        <View style={{flexDirection: 'row', width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
         <TouchableOpacity onPress= {() => this.props.navigation.navigate('Bw')}>
            <Image style={styles.icon} source={require('../assets/iconbw.png')} />
            <Text style={styles.buttonText}>Die Reserve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.icon} source={require('../assets/iconboerse.png')} />
            <Text style={styles.buttonText}>Stellenangebote</Text>
          </TouchableOpacity> 
        </View>

        <View style={{flexDirection: 'row', width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
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
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
});
