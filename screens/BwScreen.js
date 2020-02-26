import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, TouchableOpacity, Button, View, Text} from 'react-native';


export default class BwScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{padding: 10}}>

        <View style={{flexDirection: 'row'}}>

          <View style={{alignItems: 'center', padding: 20, width: '50%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity style={{borderBottomColor:'black', borderBottomWidth:1}} onPress= {() => this.props.navigation.navigate('Auftrag_BwScreen')}>
            <Text style={{color:'white'}}>Der Auftrag</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', padding: 20, width: '50%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity style={{borderBottomColor:'black', borderBottomWidth:1}} onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')}>
            <Text style={{color:'white'}}>Die Organisation</Text>
            </TouchableOpacity> 
          </View>

        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', padding: 20, width: '50%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity onPress= {() => this.props.navigation.navigate('Mensch_BwScreen')}>
            <Text style={{color:'white'}}>Der Mensch</Text>
            </TouchableOpacity> 
          </View>

          <View style={{alignItems: 'center', padding: 20, width: '50%', borderColor:'black', borderWidth:1}}>
           <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
            <Text style={{color:'white'}}>Reservist werden!</Text>
           </TouchableOpacity> 
          </View>
        </View>
     
      
      <View>
        <Text style={{color:'white'}}>Blog-Einträge und co</Text>
      </View>
     </View>
     </ImageBackground>
    );
  }
}
