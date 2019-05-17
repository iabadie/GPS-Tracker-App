import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import StartIcon from '../../assets/mapIcons/start.png';

const initialState = {
  // Caseros - Untref
    latitude: -34.6064018,
    longitude: -58.5694025,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  }

const coordsMock = [
    { latitude: -34.6085018, longitude: -58.5684025 },
    { latitude: -34.6075019, longitude: -58.5704024 },
    { latitude: -34.6064020, longitude: -58.5684023 },
    { latitude: -34.6054021, longitude: -58.5704022 },
    { latitude: -34.6044023, longitude: -58.5684021 },
    { latitude: -34.6034030, longitude: -58.5704020 }
  ]

class Map extends Component {
  state = { region: initialState }

  handleRegionChange = region => {
    this.setState({ region });
  }

  render() {
    const { region } = this.state;
    return (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          region={region}
          onRegionChangeComplete={this.handleRegionChange}
        >
          <Polyline
            coordinates={coordsMock}
            lineDashPattern={[10,10]}
            lineJoin="round"
            lineCap="square"
            strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={3}
          />
          <Marker coordinate={coordsMock[0]} title="Comienzo del recorrido" icon={StartIcon} />
          <Marker coordinate={coordsMock[coordsMock.length-1]} title="Ultima posición conocida" pinColor="green" />
        </MapView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

export default Map;

// REFS
// RN GOOGLE MAPS https://github.com/react-native-community/react-native-maps
// POLYLINES https://github.com/react-native-community/react-native-maps/blob/master/docs/polyline.md
// MARKERS https://github.com/react-native-community/react-native-maps/blob/master/docs/marker.md
// START ICON -> Icon made by Freepik from www.flaticon.com 

