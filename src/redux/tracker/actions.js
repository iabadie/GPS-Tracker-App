import * as LocalStorageService from '../../services/LocalStoreService';
import { stringArrayToObject } from '../../utils/arrayUtils';

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
        const parsedTracks = JSON.parse(newTracks)?.new_items;
        if (!parsedTracks) throw new Error('Información de request inválida');
        const tracks = getState().tracker.tracks.concat(parsedTracks);
        const response = await LocalStorageService.setTracks(tracks);
        dispatch(privateActionCreators.setNewTracksSuccess(response));
      } catch (e) {
        dispatch(privateActionCreators.setNewTracksFailure(e.message));
      }
    };
  },
  getTracks() {
    return async dispatch => {
      dispatch({ type: actions.GET_TRACKS });
      try {
        const tracks = await LocalStorageService.getTracks();
        if (tracks) dispatch(privateActionCreators.getTracksSuccess(tracks));
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
