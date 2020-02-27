import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Linking, WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';




export default class LinkStrategieOrgaScreen extends Component {
    render() {
        return (
        <WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/organisation-der-reserve-der-bundeswehr/kompetenzzentrum-fuer-reservistenangelegenheiten-der-bundeswehr/strategie-der-reserve'}}
            style={{marginTop: 20}}
        />
        )
    }
}