import React, { Component } from 'react';
import { Icon, Button, View, Text, StyleSheet, Image, Linking, Card, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class StartScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

          <TouchableOpacity style={{backgroundColor:'rgba(255,255,255, 0.90)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}} onPress= {() => this.props.navigation.navigate('Bw')}>
            <Image style={styles.icon} source={require('../assets/iconbw.png')} />
            <Text style={styles.buttonText}>Informationen</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={{backgroundColor:'rgba(255,255,255, 0.90)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}} onPress= {() => { Linking.openURL('https://bundeswehr.community')}}>
            <Image style={styles.icon} source={require('../assets/iconcommunity.png')} />
            <Text style={styles.buttonText}>Bw Community</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={{backgroundColor:'rgba(255,255,255, 0.90)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}} onPress= {() => this.props.navigation.navigate('Boerse')}>
            <Image style={styles.icon} source={require('../assets/iconboerse.png')} />
            <Text style={styles.buttonText}>Stellenbörse</Text>
          </TouchableOpacity>          
        
          <TouchableOpacity style={{backgroundColor:'rgba(255,255,255, 0.90)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}} onPress= {() => this.props.navigation.navigate('Cal')}>
            <Image style={styles.icon} source={require('../assets/iconcal.png')} />
            <Text style={styles.buttonText}>Reservistenverband</Text>
          </TouchableOpacity>
        



      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 27,
    color: 'black',
  },
});
