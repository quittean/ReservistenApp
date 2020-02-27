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
      <View style={{padding: 20,alignItems: 'center', width: '100%', justifyContent:'center'}}>

        
        <View style={{padding: 20, width:'70%',}}>
          <View style={{justifyContent:'center', backgroundColor:'white', alignItems: 'center', padding: 10, borderColor:'black', borderWidth:1}}>
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Auftrag_BwScreen')}>
            <Text style={{textAlign:'center', color:'black'}}>Der Auftrag</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{padding: 20, width: '70%'}}>
          <View style={{justifyContent:'center', backgroundColor:'white',alignItems: 'center', padding: 10,  borderColor:'black', borderWidth:1}}>
            <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')}>
            <Text style={{textAlign:'center', color:'black'}}>Die Organisation</Text>
            </TouchableOpacity> 
          </View>
        </View>  

        <View style={{padding: 20, width: '70%' }}>
          <View style={{justifyContent:'center',alignItems: 'center', padding: 10, borderColor:'#13239D', borderWidth:2}}>
            <TouchableOpacity style={{}} onPress= {() => this.props.navigation.navigate('Link_Menschen_BwScreen')}>
            <Text style={{textAlign:'center',color:'#13239D',fontSize:20, fontWeight:'bold'}}>Die Menschen</Text>
            </TouchableOpacity> 
          </View>
        </View>

        <View style={{padding: 20, width: '70%'}}>
          <View style={{justifyContent:'center',alignItems: 'center', padding: 10, borderColor:'white', borderWidth:2}}>
           <TouchableOpacity onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')}>
            <Text style={{textAlign:'center',color:'white', fontSize:15, fontWeight:'bold'}}>Reservist werden!</Text>
           </TouchableOpacity> 
          </View>
        </View>

        <View style={{padding: 20, width: '70%'}}>
          <View style={{justifyContent:'center', backgroundColor:'rgba(0, 0, 0, 0.65)',alignItems: 'center', padding: 10, borderColor:'black', borderWidth:1}}>
            <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Aktuelles_BwScreen')}>
             <Text style={{textAlign:'center',color:'white'}}>Aktuelles</Text>
             </TouchableOpacity> 
         </View>
        </View>

        <View style={{height:250, justifyContent:'center', alignItems:'center'}}>
        
        </View>

      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
