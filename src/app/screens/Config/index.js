import React, { Component } from 'react';
import { ImageBackground, TextInput, Text, TouchableHighlight, View, NativeModules } from 'react-native';

import NavigationService from '../../../services/NavigationService';
import fondo from '../../assets/background/fondo.png';

import styles from './styles';

const { BluetoothClient } = NativeModules;

class Config extends Component {
  state = {
    connected: false,
    ssid: '',
    password: ''
  };

  componentDidMount() {
    this.handleOpenConfig();
  }

  handleSsidChange = newSsid => {
    this.setState({ ssid: newSsid });
  };

  handlePasswordChange = newPassword => {
    this.setState({ password: newPassword });
  };

  handleOpenConfig = () => {
    this.setState({ connected: false });
    BluetoothClient.startSearchDevices(this.callbackDeviceFound);
  };

  callbackDeviceFound = isConnected => {
    this.setState({ connected: isConnected });
  };

  handleAcceptConfig = () => {
    const { ssid, password } = this.state;
    BluetoothClient.applyConfig(ssid, password, this.callbackApplyConfig);
  };

  callbackApplyConfig = applied => {
    if (!applied) {
      this.handleOpenConfig();
    } else {
      this.back();
    }
  };

  back = () => {
    NavigationService.back();
  };

  render() {
    const { password, ssid, connected } = this.state;
    return (
      <ImageBackground style={styles.container} source={fondo}>
        <View style={styles.container}>
          <TextInput
            style={styles.configInputMain}
            onChangeText={this.handleSsidChange}
            value={ssid}
            placeholder="SSID"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.configInputMain}
            onChangeText={this.handlePasswordChange}
            value={password}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>
        {connected ? (
          <View style={styles.margin}>
            <TouchableHighlight onPress={this.handleAcceptConfig}>
              <Text style={styles.configInput}>Confirmar</Text>
            </TouchableHighlight>
          </View>
        ) : (
          <View style={styles.margin}>
            <Text style={[styles.configInput, styles.searching]}>Buscando...</Text>
          </View>
        )}
        <View style={styles.buttonMargin}>
          <TouchableHighlight onPress={this.back}>
            <Text style={styles.configInput}>Cancelar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

export default Config;
