/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, NativeModules} from 'react-native';

import Map from '../Map';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colorSecondary, white } from '../../../constants/colors';

const HttpServer = NativeModules.HttpServer;

type Props = {};

class Home extends Component<Props> {
  state = { tracks: [], serverStarted: false }

  startServiceCallback = started => this.setState({ serverStarted: started });
  nativeComunicationCallback = tracks => this.setState({ tracks });

  startService = () => HttpServer.startServer(this.nativeComunicationCallback, this.startServiceCallback);

  render() {
    const { serverStarted } = this.state;
    return (
      <View style={styles.container}>
        <Map />
        {!serverStarted && (
          <View style={styles.buttonAbsolute}>
            <TouchableOpacity  style={styles.touchButton} onPress={this.startService}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{"Iniciar Servidor"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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
    alignItems: 'center'
  },
  buttonAbsolute: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchButton: {
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorSecondary,
    borderRadius: 30,
    height: 50,
  },
  buttonText: {
    color: white
  }

});

export default connect(mapStateToProps)(Home)