import { NativeModules } from 'react-native';

import * as LocalStorageService from '../../services/LocalStoreService';
import { stringArrayToObject } from '../../utils/arrayUtils';
import { getFrames, setFrame } from '../../services/ApiCall';

const { HttpServer } = NativeModules;

// const normalizeMapTracks = track => {
//   let latitude = parseFloat(track.Latitude) / 100;
//   const intLat = parseInt(latitude, 10);
//   const floatLat = ((latitude - intLat) / 60) * 100;
//   latitude = (track.LatitudeHemisphere === 'S' ? -1 : 1) * (intLat + floatLat);

//   let longitude = parseFloat(track.Longitude) / 100;

//   const intLon = parseInt(longitude, 10);
//   const floatLon = ((longitude - intLon) / 60) * 100;
//   longitude = (track.LongitudeHemisphere === 'W' ? -1 : 1) * (intLon + floatLon);

//   console.log(latitude, longitude);

//   return { latitude, longitude };
// };

export const actions = stringArrayToObject(
  [
    'SET_NEW_TRACKS',
    'SET_NEW_TRACKS_SUCCESS',
    'SET_NEW_TRACKS_FAILURE',
    'GET_TRACKS',
    'GET_TRACKS_SUCCESS',
    'GET_TRACKS_FAILURE',
    'DELETE_TRACKS'
  ],
  '@@TRACKS'
);

const privateActionCreators = {
  setNewTracksSuccess(tracks) {
    return {
      type: actions.SET_NEW_TRACKS_SUCCESS,
      payload: tracks
    };
  },
  setNewTracksFailure(err) {
    return {
      type: actions.SET_NEW_TRACKS_FAILURE,
      payload: { err }
    };
  },
  getTracksSuccess(tracks) {
    return {
      type: actions.GET_TRACKS_SUCCESS,
      payload: tracks
    };
  },
  getTracksFailure(err) {
    return {
      type: actions.GET_TRACKS_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  setNewTracks(newTracks) {
    return async (dispatch, getState) => {
      dispatch({ type: actions.SET_NEW_TRACKS });
      try {
        // eslint-disable-next-line camelcase
        const parsedTracks = JSON.parse(newTracks)?.frames;
        if (!parsedTracks) throw new Error('Información de request inválida');
        // const mappedtracks = parsedTracks.map(track => normalizeMapTracks(track));
        const tracks = getState().tracker.tracks.concat(parsedTracks);
        await LocalStorageService.setTracks(tracks);
        setFrame(newTracks); // Api call
        dispatch(privateActionCreators.setNewTracksSuccess(tracks));
      } catch (e) {
        dispatch(privateActionCreators.setNewTracksFailure(e.message));
      }
    };
  },
  getTracks() {
    return async (dispatch, getState) => {
      dispatch({ type: actions.GET_TRACKS });
      try {
        const tracks = (await LocalStorageService.getTracks()) || [];
        const response = await getFrames(tracks ? tracks[tracks.length - 1].TrackNumber : undefined); // Api call
        if (response.ok) {
          tracks.concat(response.data);
          dispatch(privateActionCreators.getTracksSuccess(tracks));
          await LocalStorageService.setTracks(tracks);
          HttpServer.setLastTrack(tracks.length.toString());
        } else if (getState().tracker.tracks.length !== tracks.length) {
          dispatch(privateActionCreators.getTracksSuccess(tracks));
        } else {
          throw new Error(response.problem);
        }
      } catch (e) {
        dispatch(privateActionCreators.getTracksFailure(e.message));
      }
    };
  },
  deleteTracks() {
    return async dispatch => {
      await LocalStorageService.removeTracks();
      dispatch({ type: actions.DELETE_TRACKS });
    };
  }
};
