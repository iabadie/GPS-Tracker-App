/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, NativeModules} from 'react-native';

import Map from '../Map';

const HttpServer = NativeModules.HttpServer;

type Props = {};

export default class Home extends Component<Props> {
  state = { text: 'Servicio no iniciado' }

  startServiceCallback = string => this.setState({ text: string })

  startService = () => HttpServer.startServer(this.startServiceCallback);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{this.state.text}</Text>
        <Button onPress={this.startService} title="Iniciar servicio de Terminal" />
        <Map />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
