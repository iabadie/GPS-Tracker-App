/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createSelector } from 'reselect';

import Map from '../Map';
import { actionCreators as TrackActions } from '../../../redux/tracker/actions';

import styles from './styles';

const { HttpServer } = NativeModules;

type Props = {
  lastTrack: number,
  tracks: any
};

class Home extends Component<Props> {
  state = { serverStarted: false };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(TrackActions.pullLastFrames());
    this.setCallbacks();
  }

  componentWillUnmount() {
    this.stopServer();
  }

  // Called from native when server is running
  startServiceCallback = started => {
    this.setState({ serverStarted: started });
  };

  setCallbacks = () => {
    HttpServer.setCallbacks(this.forwardTracks);
  };

  // Bridge between native server and JS to pass from server the body request
  forwardTracks = tracks => {
    const { dispatch } = this.props;
    this.setCallbacks();
    dispatch(TrackActions.setNewTracks(tracks));
  };

  getLastTrack = () => {
    const { lastTrack } = this.props;
    HttpServer.lastTrack(lastTrack);
  };

  // call native to start internal rest server
  startService = () => {
    const { lastTrack } = this.props;
    HttpServer.startTrackerServer(lastTrack, this.startServiceCallback);
  };

  // Force to stop server instance and listenings.
  // TODO IMPLEMENT ON NATIVE SIDE
  stopServer = () => {
    HttpServer.stopServer();
    this.setState({ serverStarted: false });
  };

  render() {
    const { serverStarted } = this.state;
    const { tracks } = this.props;
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

const normalizeTracks = tracks => {
  return tracks.map(track => ({
    latitude: parseFloat(track.Latitude),
    longitude: parseFloat(track.Longitude)
  }));
};

const tracksSelector = createSelector(
  store => store.tracker.tracks,
  tracks => normalizeTracks(tracks)
);

const mapStateToProps = store => ({
  tracks: tracksSelector(store),
  lastTrack: (store.tracker.tracks.length !== 0 ? store.tracker.tracks.length - 1 : 0).toString()
});

export default connect(mapStateToProps)(Home);
