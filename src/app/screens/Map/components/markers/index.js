import React, { PureComponent } from 'react';
import { Polyline, Marker } from 'react-native-maps';

import StartIcon from '../../../../assets/mapIcons/start.png';

class MarkersRender extends PureComponent {
  render() {
    const { tracks } = this.props;
    return (
      <>
        {
          <Polyline
            coordinates={tracks}
            lineDashPattern={[10, 10]}
            lineJoin="round"
            lineCap="square"
            strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={3}
          />
        }
        {tracks.length > 0 && (
          <Marker coordinate={tracks[0]} title="Comienzo del recorrido" icon={StartIcon} />
        )}
        {tracks.length > 1 && (
          <Marker coordinate={tracks[tracks.length - 1]} title="Ultima posición conocida" pinColor="green" />
        )}
      </>
    );
  }
}

export default MarkersRender;

// REFS
// POLYLINES https://github.com/react-native-community/react-native-maps/blob/master/docs/polyline.md
// MARKERS https://github.com/react-native-community/react-native-maps/blob/master/docs/marker.md
// START ICON -> Icon made by Freepik from www.flaticon.com
