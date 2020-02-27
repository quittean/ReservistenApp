import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebView} from 'react-native-webview';

export default class ReservistScreen extends Component {
  render() {
    return (
<WebView
            source={{uri: 'https://www.bundeswehr.de/de/ueber-die-bundeswehr/die-reserve-der-bundeswehr/reservist-werden-in-der-bundeswehr-'}}
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
            var weitereThemenNr;
            var mehrZumThemaNr;
            var boerseNr;
            var faqNr;
            for (i = 0; i<main.children.length; i++){
              for (j = 0; j<main.children[i].children.length; j++){
                for (k = 0; k<main.children[i].children[j].children.length; k++){
                  if (main.children[i].children[j].children[k].tagName == "H2"){
                      if (main.children[i].children[j].children[k].innerHTML.includes("Weitere Themen")){
                        weitereThemenNr = i;
                      }
                      if (main.children[i].children[j].children[k].innerHTML.includes("Mehr zum Thema:&nbsp;Reservist werden")){
                        mehrZumThemaNr = i;
                      }
                      if (main.children[i].children[j].children[k].innerHTML.includes("Die Stellenbörse für Reservistinnen und Reservisten")){
                        boerseNr = i;
                      }
                      if (main.children[i].children[j].children[k].innerHTML.includes("Häufig gestellte Fragen zur Reserve im Überblick")){
                        faqNr = i;
                      }
                  }
                }
              }
            }
            if (weitereThemenNr > -1){
              main.removeChild(main.children[weitereThemenNr]);
            }
            if (mehrZumThemaNr > -1){
              main.removeChild(main.children[mehrZumThemaNr]);
            }
            if (faqNr > -1){
              main.removeChild(main.children[faqNr]);
            }
            if (faqNr > -1){
              main.removeChild(main.children[faqNr]);
            }
            if (boerseNr > -1){
              main.removeChild(main.children[boerseNr]);
            }
            if (boerseNr > -1){
              main.removeChild(main.children[boerseNr]);
            }

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();
            `}
        />
    )
  }
}