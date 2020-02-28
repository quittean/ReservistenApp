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
          removeElementsByClass("mobile-nav-toggle visible-xs-block visible-sm-block");
          removeElementsByClass("footer");
          removeElementsByClass("widget widget--social");
          removeElementsByClass("sticky-nav tab-nav text-uppercase");
          document.getElementById("pl-36").remove();
          `}
        />
        )
    }
}