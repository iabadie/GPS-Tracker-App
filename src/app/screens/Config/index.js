import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, NativeModules, Alert } from 'react-native';
import { TextInput } from 'react-native';

import styles from './styles';

class Config extends Component {

  constructor(props) {
    super(props);

    const { BluetoothClient } = NativeModules;
    this.BluetoothClient = BluetoothClient;
  }

  state = {
    modalVisible: false,
    ssid: "",
    password: ""
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleSsidChange = newSsid => {
    this.setState({ ssid: newSsid });
  }

  handlePasswordChange = newPassword => {
    this.setState({ password: newPassword });
  }

  handleDeviceFound = device => {
    Alert.alert(device);
  }

  handleAcceptConfig = () => {
    this.BluetoothClient.startSearchDevices(this.handleDeviceFound);
  }

  render() {
    return (
      <View style={styles.margin}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.margin}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.configInput}>Cancelar</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.margin}>
              <TextInput
                style={styles.configInput}
                onChangeText={this.handleSsidChange}
                value={this.state.ssid}
                placeholder="SSID"
              />
              <TextInput
                style={styles.configInput}
                onChangeText={this.handlePasswordChange}
                value={this.state.password}
                placeholder="Password"
              />
            </View>
            <View style={styles.margin}>
              <TouchableHighlight
                onPress={this.handleAcceptConfig}>
                <Text style={styles.configInput}>Aceptar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.configInput}>Configurar</Text>
        </TouchableHighlight>
      </View >
    );
  }
}

export default Config;
