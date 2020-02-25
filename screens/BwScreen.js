import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text} from 'react-native';


export default class BwScreen extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
         <Button title="Auftrag" onPress= {() => this.props.navigation.navigate('Auftrag_BwScreen')} />
         
          
         <Button title="Organisation" onPress= {() => this.props.navigation.navigate('Organisation_BwScreen')} />
           
        </View>

        <View style={{flexDirection: 'row', width: '80%', height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Button title="Mensch" onPress= {() => this.props.navigation.navigate('Mensch_BwScreen')} />
            

          <Button title="Reservist werden!" onPress= {() => this.props.navigation.navigate('Reservist_BwScreen')} />
        </View>
     
      
      <View>
        <Text>Blog-Einträge und co</Text>
      </View>
     </View> 
    );
  }
}
