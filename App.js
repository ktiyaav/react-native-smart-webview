import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import { Camera } from 'react-feather';
//import { Icon } from 'react-native-elements';
import WebView from 'react-native-webview';
import Icon from "react-native-feather1s";
export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state={
      isVisible: true,
      weburl: 'https://domain.com/',
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 6500);
  }
  changeURL(x) {
    this.setState({
      isVisible: false,
      weburl: x,
    });
  }
  displayError() {
    Alert.alert(
      "No Internet!!",
      "Turn on the Mobile Data or WiFi.",
      [
        { text: 'Retry', onPress: () => this.changeURL('https://domain.com/') },
      ],
      { cancelable: false });
  }

  render() {
    let Splash_Screen = (
      <View style={styles.splashRoot}>
        <View style={styles.splashChild}>
          <Image
            source={{
              uri:
                'https://domain.com/splashscreen.png',
            }}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <WebView
          onError={() => this.displayError()}
          style={styles.webView}
          source={{uri: this.state.weburl}}
        />
        {this.state.isVisible === true ? Splash_Screen : null}
        <View style={styles.tabBar}>
          <TouchableOpacity
            onPress={() => {
              this.changeURL('');
            }}>
            <Icon name="home" size={23} iconStyle={styles.yourStyle} thin={false} color="#222">
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeURL('');
            }}>
            <Icon name="search" size={23} iconStyle={styles.yourStyle} thin={false} color="#222">
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeURL('');
            }}>
            <Icon name="shopping-bag" size={23} iconStyle={styles.yourStyle} thin={false} color="#222">
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.changeURL('');
            }}>
            <Icon name="user" size={23} iconStyle={styles.yourStyle} thin={false} color="#222">
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  webview: {
    flex: 1,
  },
  splashRoot: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },

  splashChild: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030625',
    flex: 1,
  },
  tabBar: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  }
});
