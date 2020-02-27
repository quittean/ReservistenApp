import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity,Button, View, Text,Image,Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';


export default class OrganisationScreen extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{padding:20, flexDirection:'column'}}>

      <View style={{alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Wer gestaltet die Reserve? {"\n"}Welche Grundlagen und Gesetze haben Einfluss auf die Reserve?{"\n"} Antworten und weitere Informationen finden Sie hier!</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:22,textAlign:'center'}}>Die Organisation der Reserve</Text>
        <Text style={{paddingTop:10,color:'white',textAlign:'center'}}>Die Konzeption der Bundeswehr und die Strategie der Reserve bilden die Grundlage für Planung und Organisation der Reserve. Die Strategie der Reserve bildet den Rahmen für den Dialog zwischen</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Bundeswehr,</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>den Reservistinnen und Reservisten,</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>den Arbeitgeberinnen und Arbeitgebern</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>sowie</Text>
        <Text style={{paddingTop:10,color:'white',textAlign:'center'}}>den in der Reservistenarbeit tätigen Verbänden und Vereinigungen. Reservistenangelegenheiten sind eine Führungsaufgabe. Personalentwicklung, Ausbildung und Bindung von Reservistinnen und Reservisten an die Bundeswehr nehmen Vorgesetzte in die Pflicht. Hierzu setzen alle Dienststellenleiterinnen oder Dienststellenleiter bis zur Bataillonsebene eine Beauftragte oder einen Beauftragten für die Reservistenarbeit ein.</Text>
        <Text style={{paddingTop:10,color:'white', fontWeight:'bold', fontSize:17,textAlign:'center'}}>Weiter interessante Informationen finden Sie in den unter aufgeführten Links.</Text>
      </View>

      <View style={{paddingTop:20, alignItems:'center'}}>

        <View style={{borderColor:'white', borderWidth:1, justifyContent:'space-evenly', flexDirection: 'row',width:'85%'}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => this.props.navigation.navigate('Link_Reserveangelegenheiten_OrgaScreen')}>
          <View style={{justifyContent:'center', width:'40%'}}>           
            <Image style={{}} source={require('../assets/very_small_joachimruhle.png')} />           
          </View>
          <View style={{justifyContent:'center', width:'60%'}}>
            <Text style={{color:'white'}}>Beauftragter{"\n"}für Reservisten- {"\n"}angelegenheiten</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingTop:10}}>
          <View style={{borderColor:'white', borderWidth:1,justifyContent:'space-evenly', flexDirection: 'row', width:'85%'}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => this.props.navigation.navigate('Link_Kompetenzzentrum_OrgaScreen')}>
            <View style={{justifyContent:'center', width:'40%'}}>           
             <Image style={{}} source={require('../assets/very_small_strategie.png')} />            
           </View>
           <View style={{justifyContent:'center', width:'60%'}}>
              <Text style={{color:'white'}}>Kompetenzzetrum {"\n"}für Reservisten-{"\n"}angelegenheiten</Text>
           </View>
           </TouchableOpacity>
          </View>
         </View>

        <View style={{paddingTop:10}}>
          <View style={{borderColor:'white', borderWidth:1,justifyContent:'space-evenly', flexDirection: 'row', width:'85%'}}>
          <TouchableOpacity style={{flexDirection:'row'}} onPress= {() => { Linking.openURL('https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/organisation-der-reserve-der-bundeswehr/grundlagen-und-gesetze-fuer-die-reserve-der-bundeswehr')}}>
            <View style={{justifyContent:'center', width:'40%'}}>          
              <Image style={{}} source={require('../assets/very_small_gesetze.png')} />            
           </View>
            <View style={{justifyContent:'center', width:'60%'}}>
              <Text style={{color:'white'}}>Grundlagen und Gesetze</Text>
            </View>
            </TouchableOpacity>
         </View>
        </View>

      </View>
      
      </View>
      </ImageBackground>
      </ScrollView>
    )
  }
}