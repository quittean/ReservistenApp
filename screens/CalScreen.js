import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { WebView} from 'react-native-webview';

export default class CalScreen extends Component {
  render() {
    return (
      <WebView
          source={{ uri: 'https://www.reservistenverband.de/veranstaltungen/?kategorie=&landesid=&search=&distance=' }}
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
          removeElementsByClass("main-nav");
          removeElementsByClass("sidebar-widget sidebar-widget--veranstaltungen");
          removeElementsByClass("footer");
          removeElementsByClass("sticky-nav tab-nav text-uppercase");
          removeElementsByClass("slider slider--state slider--teaser slick-initialized slick-slider");
          removeElementsByClass("widget widget--social");
          `}
      />
    )
  }
}