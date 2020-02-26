import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Linking, WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';




export default class BoerseScreen extends Component {
    render() {
        return (
        <WebView
            source={{uri: 'https://bewerbung.bundeswehr-karriere.de/erece/portal/index.html#/JobList/milGroup/TwoColumnsMidExpanded/?json=%257B%2522Langu%2522:%2522D%2522,%2522SearchCategory%2522:%255B%25220022%2522%255D%257D'}}
            style={{marginTop: 20}}
        />
        )
    }
}






/*
const DATA = [
  {
    id: 'A763012AA-2020-00000760-E',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-F',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-G',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-H',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-I',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-J',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-K',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-L',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
  {
    id: 'A763012AA-2020-00000760-M',
    title: 'MatBewFw SK nur für Reservisten regional aus Oberfranken',
    location: 'Bayreuth',
    dotierung: 'A7 bis A9 M',
    zeitmodell: 'Vollzeit'
  },
];


export default class BoerseScreen extends Component {
    
    state={
        showWebView: false
    }

    onNavigationStateChange = navState => {
        if (navState.url.indexOf('https://www.google.com') === 0) {
        const regex = /#access_token=(.+)/;
        const accessToken = navState.url.match(regex)[1];
        console.log(accessToken);
      }
    };


    renderContent() {
        return (
          <WebView
            source={{
              uri: 'https://google.de'
           }}
          />
        );
    }

    render() {
        return (
            <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                { this.state.showWebView && this.renderContent() }
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress= { () => this.setState({showWebView: true})}>
                            <View style={styles.listItem}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text>
                                    Beschäftigungsort: {item.location} - {item.dotierung}
                                </Text>
                                <Text>
                                    {item.id} - {item.zeitmodell}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                </SafeAreaView>
            </ImageBackground>
        );
    }
    _openWebView = () => {  
        render(            <WebView
            source={{uri: 'https://bewerbung.bundeswehr-karriere.de/erece/portal/index.html#/JobList/milGroup/TwoColumnsMidExpanded/?json=%257B%2522Langu%2522:%2522D%2522,%2522SearchCategory%2522:%255B%25220022%2522%255D%257D'}}
            style={{marginTop: 20}}
        />);
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  listItem: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    color: '#02b',
  },
});
*/