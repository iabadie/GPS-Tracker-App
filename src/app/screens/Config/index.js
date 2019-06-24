import React, { Component } from 'react';
import { TextInput, Text, TouchableHighlight, View, NativeModules } from 'react-native';

import NavigationService from '../../../services/NavigationService';

import styles from './styles';

const { BluetoothClient } = NativeModules.BluetoothClient;

class Config extends Component {
  state = {
    connected: false,
    ssid: '',
    password: ''
  };

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
    }
  };

  back = () => {
    NavigationService.back();
  };

  render() {
    const { password, ssid, connected } = this.state;
    return (
      <View style={styles.margin}>
        <View style={styles.margin}>
          <View>
            <TouchableHighlight onPress={() => {}}>
              <Text style={styles.configInput}>Cancelar</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.margin}>
            <TextInput
              style={styles.configInput}
              onChangeText={this.handleSsidChange}
              value={ssid}
              placeholder="SSID"
            />
            <TextInput
              style={styles.configInput}
              onChangeText={this.handlePasswordChange}
              value={password}
              placeholder="Password"
            />
          </View>
          {connected ? (
            <View style={styles.margin}>
              <TouchableHighlight onPress={this.handleAcceptConfig}>
                <Text style={styles.configInput}>Aceptar</Text>
              </TouchableHighlight>
            </View>
          ) : (
            <View style={styles.margin}>
              <Text style={styles.configInput}>Conectando</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Config;
