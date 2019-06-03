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
    connected: false,
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

  handleOpenConfig = () => {
    this.setState({ modalVisible: true, connected: false });
    this.BluetoothClient.startSearchDevices(this.callbackDeviceFound);
  }

  callbackDeviceFound = isConnected => {
    this.setState({ connected: isConnected });
  }

  handleAcceptConfig = () => {
    this.BluetoothClient.applyConfig(this.state.ssid, this.state.password, this.callbackApplyConfig);
  }

  callbackApplyConfig = applied => {
    if (!applied) {
      Alert.alert("No se ha podido aplicar la configuracion");
    } else {
      Alert.alert(applied);
      this.setState({ modalVisible: false });
    }
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
            {
              this.state.connected ?
                (<View style={styles.margin}>
                  <TouchableHighlight
                    onPress={this.handleAcceptConfig}>
                    <Text style={styles.configInput}>Aceptar</Text>
                  </TouchableHighlight>
                </View>) :
                (<View style={styles.margin}>
                  <Text style={styles.configInput}>Conectando</Text>
                </View>)
            }
          </View>
        </Modal>

        <TouchableHighlight
          onPress={this.handleOpenConfig}>
          <Text style={styles.configInput}>Configurar</Text>
        </TouchableHighlight>
      </View >
    );
  }
}

export default Config;
