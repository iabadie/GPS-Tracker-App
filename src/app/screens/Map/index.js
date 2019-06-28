import React, { Component } from 'react';
import { PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';

import styles from './styles';
import MarkersRender from './components/markers';

const initialState = {
  // Caseros - Untref
  latitude: -34.6064018,
  longitude: -58.5694025,
  latitudeDelta: 0.008,
  longitudeDelta: 0.008
};

// const coordsMock = [
//   { latitude: -34.6085018, longitude: -58.5684025 },
//   { latitude: -34.6075019, longitude: -58.5704024 },
//   { latitude: -34.606402, longitude: -58.5684023 },
//   { latitude: -34.6054021, longitude: -58.5704022 },
//   { latitude: -34.6044023, longitude: -58.5684021 },
//   { latitude: -34.603403, longitude: -58.570402 }
// ];

class Map extends Component {
  state = { region: new AnimatedRegion(initialState) };

  componentDidUpdate(prevProps) {
    const { tracks } = this.props; // eslint-disable-line
    if (prevProps.tracks.length !== tracks.length) {// eslint-disable-line
      const last = tracks[tracks.length - 1];
      this.setState(prevState => ({// eslint-disable-line
        region: new AnimatedRegion({
          ...prevState.region,
          latitude: last.latitude,
          longitude: last.longitude
        })
      }));
    }
  }

  handleRegionChange = region => {
    this.setState({ region: new AnimatedRegion(region) });
  };

  render() {
    const { region } = this.state;
    // eslint-disable-next-line
    const { tracks } = this.props;
    return (
      <Animated
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={region}
        onRegionChangeComplete={this.handleRegionChange}
      >
        <MarkersRender tracks={tracks} />
      </Animated>
    );
  }
}

export default Map;

// REFS
// RN GOOGLE MAPS https://github.com/react-native-community/react-native-maps
