import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    render() {
        return (
            <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress= {() => alert(item.id)}>
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