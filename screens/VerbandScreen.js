import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, TouchableOpacity, Button, View, Text, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class VerbandScreen extends Component {
  render() {
    return (
      
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>

        <View style={{padding: 10, width: '100%'}}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Magazin_VerbandScreen')}>
           <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
             <Text style={{textAlign:'center',color:'black', fontSize:22}}>Das Magazin <Text style={{fontStyle: 'italic', fontSize:17}}>die reserve</Text></Text>
             
           </View>
          </TouchableOpacity> 
        </View>

        <View style={{padding: 10, width: '100%'}}>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Cal')}>
           <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
             <Text style={{textAlign:'center',color:'black', fontSize:22}}>Veranstaltungskalender</Text>
             
           </View>
          </TouchableOpacity> 
        </View>

        <View style={{padding: 10, width: '100%'}}>
          <TouchableOpacity onPress= {() => { Linking.openURL('https://www.reservistenverband.de')}}>
           <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
             <Text style={{textAlign:'center',color:'black', fontSize:22}}>Reservistenverband.de</Text>
             
           </View>
          </TouchableOpacity> 
        </View>

      </View>
      </ImageBackground>
      
    );
  }
}
