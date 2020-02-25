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


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Cal" component={CalScreen} />
        <Stack.Screen name="Bw" component={BwScreen} />
        <Stack.Screen name="Boerse" component={BoerseScreen} />
        <Stack.Screen name="Mensch_BwScreen" component={MenschScreen} />
        <Stack.Screen name="Auftrag_BwScreen" component={AuftragScreen} />
        <Stack.Screen name="Organisation_BwScreen" component={OrganisationScreen} />
        <Stack.Screen name="Reservist_BwScreen" component={ReservistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;