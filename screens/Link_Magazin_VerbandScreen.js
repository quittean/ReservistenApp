import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Linking, WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';




export default class LinkMagazinVerbandScreen extends Component {
    render() {
        return (
        <WebView
            source={{uri: 'https://www.reservistenverband.de/magazin-die-reserve/'}}
            style={{marginTop: 20}}
        />
        )
    }
}