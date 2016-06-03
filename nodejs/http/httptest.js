/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Platform,

} from 'react-native';
import JPushModule from 'jpush-for-react-native';

class TestProject extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bg: '#ffffff',
      appkey: 'AppKey',
      imei: 'IMEI',
      package: 'PackageName',
      deviceId: 'DeviceId',
      version: 'Version',
      pushMsg: 'PushMessage'
    }
    this.onInitPress = this.onInitPress.bind(this);
    this.onStopPress = this.onStopPress.bind(this);
    this.onResumePress = this.onResumePress.bind(this);
  }

  componentWillMount() {
    JPushModule.getInfo((map) => {
      this.setState({
            appkey: map.myAppKey,
            imei: map.myImei,
            package: map.myPackageName,
            deviceId: map.myDeviceId,
            version: map.myVersion
      });
    });

  }

  componentDidMount() {
    JPushModule.addReceiveCustomMsgListener((message) => {
      this.setState({pushMsg: message});
    });
    JPushModule.addReceiveNotificationListener((message) => {
      console.log("receive notification: " + message);
    })
  }

  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }

  onInitPress() {
    if (Platform.) {}
    JPushModule.initPush();
  }

  onStopPress() {
    JPushModule.stopPush();
    console.log("Stop push press");
  }

  onResumePress() {
    JPushModule.resumePush();
    console.log("Resume push press");
  }

  render() {
    return (
       <ScrollView style = { styles.parent }>
            
            <Text style = { styles.textStyle }>
              { this.state.appkey }
            </Text>
            <Text style = { styles.textStyle }>
              { this.state.imei }
            </Text>
            <Text style  = { styles.textStyle }>
              { this.state.package }
            </Text>
            <Text style = { styles.textStyle }>
              { this.state.deviceId }
            </Text> 
            <Text style = { styles.textStyle }>
              { this.state.version }
            </Text>
            <TouchableHighlight
              underlayColor = '#0866d9'
              activeOpacity = { 0.5 }
              style = { styles.btnStyle }
              onPress = { this.jumpSetActivity }>
              <Text style = { styles.btnTextStyle }>
                设置
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor = '#0866d9'
              activeOpacity = { 0.5 }
              style = { styles.btnStyle }
              onPress = { this.onInitPress }>
                <Text style = { styles.btnTextStyle }>
                  INITPUSH
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor = '#e4083f'
              activeOpacity = { 0.5 }
              style = { styles.btnStyle }
              onPress = { this.onStopPress }>
                <Text style = { styles.btnTextStyle }>
                  STOPPUSH
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor = '#f5a402'
              activeOpacity = { 0.5 }
              style = { styles.btnStyle }
              onPress = { this.onResumePress }>
                <Text style = { styles.btnTextStyle }> 
                  RESUMEPUSH
                </Text>
            </TouchableHighlight>
            <Text style = { styles.textStyle }>
              { this.state.pushMsg }
            </Text>
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    parent: {
    padding: 15,
    backgroundColor: '#f0f1f3'
  },

  textStyle: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#808080'
  },

  btnStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7'
  },
  btnTextStyle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ffffff'
  },
  inputStyle: {
    borderColor: '#48bbec',
    borderWidth: 1,

  },
});

AppRegistry.registerComponent('TestApp', () => TestProject);