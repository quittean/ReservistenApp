import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, TouchableOpacity, Button, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class BwScreen extends Component {
  render() {
    return (
      
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>

      <View style={{padding: 10, width: '100%', paddingTop: 200}}>
        <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Aktuelles_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
             <Text style={{textAlign:'center',color:'black', fontSize:22}}>Aktuelles</Text>
             
         </View>
         </TouchableOpacity> 
        </View>

        <View style={{padding: 10, width: '100%'}}>
        <TouchableOpacity style={{}} onPress= {() => this.props.navigation.navigate('Link_Menschen_BwScreen')}>
          <View style={{justifyContent:'center',backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'black', fontSize:22}}>Menschen</Text>
            
          </View>
          </TouchableOpacity> 
        </View>

        <View style={{padding: 10, width: '100%'}}>
        <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Link_Auftrag_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'black', fontSize:22}}>Auftrag</Text>
           
          </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 10, width: '100%'}}>
        <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
            
            <Text style={{textAlign:'center',color:'black', fontSize:22}}>Organisation</Text>
          
          </View>
          </TouchableOpacity> 
        </View>  

        <View style={{padding: 10, width: '100%'}}>
        <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
          <View style={{justifyContent:'center',backgroundColor:'rgba(255,255,255, 0.90)',alignItems: 'center', padding: 10}}>
          
            <Text style={{textAlign:'center',color:'black', fontSize:22}}>Reservist werden</Text>
            
          </View>
          </TouchableOpacity>
        </View>



        <View style={{height:250, justifyContent:'center', alignItems:'center'}}>
        
        </View>

      </View>
      </ImageBackground>
      
    );
  }
}
