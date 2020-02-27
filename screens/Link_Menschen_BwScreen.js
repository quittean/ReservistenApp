import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Linking, WebBrowser } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';




export default class LinkMenschenBwScreen extends Component {
    render() {
        return (
        <WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/menschen-in-der-reserve-der-bundeswehr'}}
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


            
            var main = document.getElementById("r-main");
            var alsReservist;
            for (i = 0; i<main.children.length; i++){
              for (j = 0; j<main.children[i].children.length; j++){
                for (k = 0; k<main.children[i].children[j].children.length; k++){
                  if (main.children[i].children[j].children[k].tagName == "H2"){
                      if (main.children[i].children[j].children[k].innerHTML.includes("Als Reservist bei der Bundeswehr")){
                        alsReservist = i;
                      }
                  }
                }
              }
            }
            if (alsReservist > -1){
              main.removeChild(main.children[alsReservist]);
            }
            

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();
            `}
        />
        )
    }
}