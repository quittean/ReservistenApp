import React, { Component } from 'react';
import { Image, ScrolView, ImageBackground, TouchableOpacity,Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class AuftragScreen extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../assets/small-reserve-bundeswehr-hindernisbahn.jpg')} />
        </View>
      <View style={{padding:10, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={{color:'white', fontWeight:'bold', fontSize:30,textAlign:'center'}}>Was ist der Auftrag der Reserve?</Text>

          <Text style={{color:'white', padding:10, fontWeight:'bold', fontSize:15, textAlign:'center'}}> Personalergänzung und Personalverstärkung</Text>
            
            <Text style={{color:'white', paddingTop:10, textAlign:'center'}}>
              Das veränderte sicherheitspolitische Umfeld erfordert die personelle Verstärkung der Reserve der Bundeswehr. Die Reservistinnen und Reservisten unterstützen die Bundeswehr im gesamten Aufgabengebiet. Zudem schafft die Reserve die Verbindung in unsere Gesellschaft.
              Reservistinnen und Reservisten leisten je nach Ausbildung und zeitlicher Verfügbarkeit ihren Beitrag zum Auftrag der Reserve. 
            </Text>

          <Text style={{color:'white', paddingTop:10, fontWeight:'bold', fontSize:15, textAlign:'center'}}>Mittlerfunktion für die Bundeswehr in der Gesellschaft</Text>
            
            <Text style={{color:'white', paddingTop:10, textAlign:'center'}}>
              Die Reserve gewinnt durch die Aussetzung des Grundwehrdienstes an Bedeutung. Jede Reservistin und jeder Reservist trägt Wissen und Informationen über die Bundeswehr in die Gesellschaft.
            </Text>

          <Text style={{color:'white', paddingTop:10, fontWeight:'bold', fontSize:15, textAlign:'center'}}>Heimatschutz – „Dienst an der Allgemeinheit“</Text>
           
            <Text style={{color:'white', paddingTop:10, textAlign:'center'}}> 
              Regionale Sicherungs- und Unterstützungskräfte bieten allen interessierten und geeigneten Reservistinnen und Reservisten Chancen des Engagements. Sie arbeiten Seite an Seite mit aktiven Soldatinnen und Soldaten zusammen, um den Auftrag der Reserve zu erfüllen. Der Aufgabenschwerpunkt Heimatschutz bei Katastrophen und schweren Unglücken stärkt das Prinzip „Dienst an der Allgemeinheit“ (Wir.Dienen.Deutschland.).
              Dabei kommt den Soldatinnen und Soldaten der Regionalen Sicherungs- und Unterstützungskräfte ihre Ortskenntnis besonders zugute, denn die Einheiten wurden flächendeckend in ganz Deutschland aufgestellt.
            </Text>

        <View>
          <TouchableOpacity onPress= {() => this.props.navigation.navigate('Link_Auftrag_BwScreen')}>
            <Text style={{textAlign:'center',color:'black'}}>Für noch mehr Informationen schauen Sie einfach hier vorbei</Text>
          </TouchableOpacity>
        </View>      
     </View>
      </ImageBackground>
      </ScrollView>
    )
  }
}