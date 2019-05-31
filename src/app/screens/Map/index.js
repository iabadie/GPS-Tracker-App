import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
  state = { region: initialState };

  handleRegionChange = region => {
    this.setState({ region });
  };

  render() {
    const { region } = this.state;
    // eslint-disable-next-line
    const { tracks } = this.props;
    console.log(tracks);
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={region}
        onRegionChangeComplete={this.handleRegionChange}
      >
        <MarkersRender tracks={tracks} />
      </MapView>
    );
  }
}

export default Map;

// REFS
// RN GOOGLE MAPS https://github.com/react-native-community/react-native-maps
