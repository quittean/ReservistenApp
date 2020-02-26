import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity,Button, View, Text,Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class OrganisationScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      
      <View style={{alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Wer gestaltet die Reserve? {"\n"}Welche Grundlagen und Gesetze haben Einfluss auf die Reserve?{"\n"} Antworten und weitere Informationen finden Sie hier!</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:22,textAlign:'center'}}>Die Organisation der Reserve</Text>
        <Text style={{paddingTop:10,color:'white',textAlign:'center'}}>Die Konzeption der Bundeswehr und die Strategie der Reserve bilden die Grundlage für Planung und Organisation der Reserve. Die Strategie der Reserve bildet den Rahmen für den Dialog zwischen</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Bundeswehr,</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>den Reservistinnen und Reservisten,</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>den Arbeitgeberinnen und Arbeitgebern</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>sowie</Text>
        <Text style={{paddingTop:10,color:'white',textAlign:'center'}}>den in der Reservistenarbeit tätigen Verbänden und Vereinigungen. Reservistenangelegenheiten sind eine Führungsaufgabe. Personalentwicklung, Ausbildung und Bindung von Reservistinnen und Reservisten an die Bundeswehr nehmen Vorgesetzte in die Pflicht. Hierzu setzen alle Dienststellenleiterinnen oder Dienststellenleiter bis zur Bataillonsebene eine Beauftragte oder einen Beauftragten für die Reservistenarbeit ein.</Text>
      </View>
      </ImageBackground>
    )
  }
}