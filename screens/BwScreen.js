import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, TouchableOpacity, Button, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class BwScreen extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{padding: 20}}>

        <View style={{justifyContent:'space-evenly', flexDirection: 'row',minheight: 60, height: 50}}>

          <View style={{justifyContent:'center', backgroundColor:'white', alignItems: 'center', padding: 10, width: '40%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Auftrag_BwScreen')}>
            <Text style={{textAlign:'center', color:'black'}}>Der Auftrag</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent:'center', backgroundColor:'white',alignItems: 'center', padding: 10, width: '40%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')}>
            <Text style={{textAlign:'center', color:'black'}}>Die Organisation</Text>
            </TouchableOpacity> 
          </View>

        </View>

        <View style={{justifyContent:'space-evenly',flexDirection: 'row', paddingTop:20, minheight: 60, height: 70}}>
          <View style={{justifyContent:'center',backgroundColor:'white',alignItems: 'center', padding: 10, width: '40%', borderColor:'black', borderWidth:1}}>
            <TouchableOpacity style={{}} onPress= {() => this.props.navigation.navigate('Link_Menschen_BwScreen')}>
            <Text style={{textAlign:'center',color:'black'}}>Die Menschen</Text>
            </TouchableOpacity> 
          </View>

          <View style={{justifyContent:'center', backgroundColor:'white',alignItems: 'center', padding: 10, width: '40%', borderColor:'black', borderWidth:1}}>
           <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
            <Text style={{textAlign:'center',color:'black'}}>Reservist werden!</Text>
           </TouchableOpacity> 
          </View>
        </View>

        <View style={{justifyContent:'center', backgroundColor:'white',alignItems: 'center', padding: 10, width: '40%', borderColor:'black', borderWidth:1}}>
           <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Aktuelles_BwScreen')}>
            <Text style={{textAlign:'center',color:'black'}}>Aktuelles</Text>
           </TouchableOpacity> 
        </View>

        <View style={{height:700, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'white'}}>Blog-Einträge und co</Text>
        </View>

      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
