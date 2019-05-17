/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, NativeModules} from 'react-native';

import Map from '../Map';
import { connect } from 'react-redux';

const HttpServer = NativeModules.HttpServer;

type Props = {};

class Home extends Component<Props> {
  state = { tracks: [] }

  startServiceCallback = tracks => this.setState({ tracks })

  startService = () => HttpServer.startServer(this.startServiceCallback);

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.startService} title="Iniciar Servidor" />
        <Map />
      </View>
    );
  }
}

const mapStateToProps = store => ({
  tracker: store
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default connect(mapStateToProps)(Home)