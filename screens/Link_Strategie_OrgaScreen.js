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
            
            function removeElementsByFourHeading(name, main){
                var strat1;
                for (i = 0; i<main.children.length; i++){
                for (j = 0; j<main.children[i].children.length; j++){
                    for (k = 0; k<main.children[i].children[j].children.length; k++){
                        for (h = 0; h<main.children[i].children[j].children[k].children.length; h++){
                            for (l = 0; l<main.children[i].children[j].children[k].children[h].children.length; l++){
                                if (main.children[i].children[j].children[k].children[h].children[l].tagName == "H4"){
                                    if (main.children[i].children[j].children[k].children[h].children[l].innerHTML.includes(name)){
                                        strat1 = i;
                                    }
                                }
                            }
                        }
                    }
                }
                }
                if (strat1 > -1){
                    main.removeChild(main.children[strat1]);
                }
            }

            function removeElementsByTwoHeading(name, main){
                var help;
                for (i = 0; i<main.children.length; i++){
                    for (j = 0; j<main.children[i].children.length; j++){
                        for (k = 0; k<main.children[i].children[j].children.length; k++){
                            if (main.children[i].children[j].children[k].tagName == "H2"){
                                if (main.children[i].children[j].children[k].innerHTML.includes(name)){
                                    help = i;
                                }
                            }
                        }
                    }
                }
                if (help > -1){
                main.removeChild(main.children[help]);
                }
            }
            
            var main = document.getElementById("r-main");

            removeElementsByTwoHeading("Weitere Themen", main);
            removeElementsByTwoHeading("Das Grundlagendokument zur Strategie der Reserve der Bundeswehr", main);

            removeElementsByClass("c-share-page c-share-page--default is-static");
            removeElementsByClass("c-share-page c-share-page--default is-on-top");

            document.getElementById("r-mainmenu").remove();
      
            removeElementsByFourHeading("Broschüre Strategie der Reserve", main);
            removeElementsByFourHeading("Flyer Strategie der Reserve", main);
            removeElementsByFourHeading("Strategie der Reserve", main);
            removeElementsByFourHeading("Reserve Strategy", main);
            removeElementsByFourHeading("Stratégie de la réserve", main);

            removeElementsByClass("footer");
            `}
        />
        )
    }
}