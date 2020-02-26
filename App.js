import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/StartScreen';
import CalScreen from './screens/CalScreen';
import BwScreen from './screens/BwScreen';
import BoerseScreen from './screens/BoerseScreen';
import MenschScreen from './screens/MenschScreen';
import AuftragScreen from './screens/AuftragScreen';
import OrganisationScreen from './screens/OrganisationScreen';
import ReservistScreen from './screens/ReservistScreen';
import LinkAuftragBwScreen from './screens/Link_Auftrag_BwScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{title: 'Die Reservisten-App'}}/>
        <Stack.Screen name="Cal" component={CalScreen} options={{title: 'Veranstaltungen'}}/>
        <Stack.Screen name="Bw" component={BwScreen} options={{title: 'Die Reserve'}}/>
        <Stack.Screen name="Boerse" component={BoerseScreen} options={{title: 'Stellenbörse'}}/>
        <Stack.Screen name="Mensch_BwScreen" component={MenschScreen} options={{title: 'Die Menschen in der Reserve'}}/>
        <Stack.Screen name="Auftrag_BwScreen" component={AuftragScreen} options={{title: 'Der Auftrag der Reserve'}}/>
        <Stack.Screen name="Organisation_BwScreen" component={OrganisationScreen} options={{title: 'Organisation'}}/>
        <Stack.Screen name="Reservist_BwScreen" component={ReservistScreen} options={{title: 'Reservist werden!'}}/>
        <Stack.Screen name="Link_Auftrag_BwScreen" component={LinkAuftragBwScreen} options={{title: 'Mehr Infos zum Auftrag'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;