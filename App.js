import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/StartScreen';
import CalScreen from './screens/CalScreen';
import BwScreen from './screens/BwScreen';
import BoerseScreen from './screens/BoerseScreen';

import AuftragScreen from './screens/AuftragScreen';
import OrganisationScreen from './screens/OrganisationScreen';
import ReservistScreen from './screens/ReservistScreen';
import LinkAuftragBwScreen from './screens/Link_Auftrag_BwScreen';
import LinkMenschenBwScreen from './screens/Link_Menschen_BwScreen';
import LinkAktuellesBwScreen from './screens/Link_Aktuelles_BwScreen';
import LinkReserveangelegenheitenOrgaScreen from './screens/Link_Reserveangelegenheiten_OrgaScreen';
import LinkKompetenzzentrumrgaScreen from './screens/Link_Kompetenzzentrum_OrgaScreen';
import LinkGrundlagenOrgaScreen from './screens/Link_Grundlagen_OrgaScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{title: 'Die Reservisten-App', headerTitleAlign:'center'}}/>
        <Stack.Screen name="Cal" component={CalScreen} options={{title: 'Veranstaltungen', headerTitleAlign:'center'}}/>
        <Stack.Screen name="Bw" component={BwScreen} options={{title: 'Die Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Boerse" component={BoerseScreen} options={{title: 'Stellenbörse',headerTitleAlign:'center'}}/>

        <Stack.Screen name="Auftrag_BwScreen" component={AuftragScreen} options={{title: 'Der Auftrag der Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Organisation_BwScreen" component={OrganisationScreen} options={{title: 'Organisation',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Reservist_BwScreen" component={ReservistScreen} options={{title: 'Reservist werden!',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Auftrag_BwScreen" component={LinkAuftragBwScreen} options={{title: 'Mehr Infos zum Auftrag',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Menschen_BwScreen" component={LinkMenschenBwScreen} options={{title: 'Menschen in der Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Aktuelles_BwScreen" component={LinkAktuellesBwScreen} options={{title: 'Aktuelles aus der Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Reserveangelegenheiten_OrgaScreen" component={LinkReserveangelegenheitenOrgaScreen} options={{title: 'Reserveangelegenheiten',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Kompetenzzentrum_OrgaScreen" component={LinkKompetenzzentrumrgaScreen} options={{title: 'Kompetenzzentrum Reserve',headerTitleAlign:'center'}}/>
        <Stack.Screen name="Link_Grundlagen_OrgaScreen" component={LinkGrundlagenOrgaScreen} options={{title: 'Grundlagen & Gesetze',headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;