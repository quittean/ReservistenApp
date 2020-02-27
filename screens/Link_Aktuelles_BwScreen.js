import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Linking, WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';




export default class LinkAktuellesBwScreen extends Component {
    render() {
        return (
        <WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/aktuelles-aus-der-reserve-der-bundeswehr'}}
            ref={c => this._webview = c}
            renderLoading={this.renderLoading}
            startInLoadingState
            javaScriptEnabled={true}
            injectedJavaScript={`
            function removeElementsByClass(className){
                var elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
            }
            removeElementsByClass("footer");
            var main = document.getElementById("r-main");
            main.removeChild(main.lastChild);
            main.removeChild(main.lastChild);
            main.removeChild(main.lastChild);

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();
            `}
        />
        )
    }
}