/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Map from '../Map';
import { actionCreators as TrackActions } from '../../../redux/tracker/actions';

import styles from './styles';

const { HttpServer } = NativeModules;

type Props = {};

class Home extends Component<Props> {
  state = { serverStarted: false };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(TrackActions.getTracks());
  }

  componentWillUnmount() {
    this.stopServer();
  }

  // Called from native when server is running
  startServiceCallback = started => {
    this.setState({ serverStarted: started });
  };

  // Bridge between native server and JS to pass from server the body request
  nativeComunicationCallback = tracks => {
    const { dispatch } = this.props;
    dispatch(TrackActions.setNewTracks(tracks));
  };

  // call native to start internal rest server
  startService = () => HttpServer.startServer(this.nativeComunicationCallback, this.startServiceCallback);

  // Force to stop server instance and listenings.
  // TODO IMPLEMENT ON NATIVE SIDE
  stopServer = () => {
    HttpServer.stopServer();
    this.setState({ serverStarted: false });
  };

  render() {
    const { serverStarted, tracks } = this.state;
    return (
      <View style={styles.container}>
        <Map tracks={tracks} />
        {!serverStarted && (
          <View style={styles.buttonAbsolute}>
            <TouchableOpacity style={styles.touchButton} onPress={this.startService}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Iniciar Servidor</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = store => ({
  tracks: store.tracker.tracks
});

export default connect(mapStateToProps)(Home);
