import * as LocalStorageService from '../../services/trackerService';
import { stringArrayToObject } from '../../utils/arrayUtils';
import { getStackTraceLines } from 'jest-message-util';

export const actions = stringArrayToObject(
  [
    'SET_NEW_TRACK',
    'SET_NEW_TRACK_SUCCESS',
    'SET_NEW_TRACK_FAILURE',
    'GET_TRACK',
    'GET_TRACK_SUCCESS',
    'GET_TRACK_FAILURE',
    'DELETE_TRACKS'
  ],
  '@@TRACKS'
);

const privateActionCreators = {
  setNewTracksSuccess(tracks) {
    return {
      type: actions.SET_NEW_TRACK_SUCCESS,
      payload: tracks
    };
  },
  setNewTracksFailure(err) {
    return {
      type: actions.SET_NEW_TRACK_FAILURE,
      payload: { err }
    };
  },
  getTracksSuccess(tracks) {
    return {
      type: actions.SET_NEW_TRACK_SUCCESS,
      payload: tracks
    };
  },
  getTracksFailure(err) {
    return {
      type: actions.SET_NEW_TRACK_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  setNewTracks(newTracks) {
    return async (dispatch, getState) => {
      dispatch({ type: actions.SET_NEW_TRACK });
      try {
        const parsedTracks = JSON.parse(newTracks)?.new_items;
        if (!parsedTracks) throw new Error("Información de request inválida");
        const tracks = getState().tracks.tracks.concat(parsedTracks);
        const response = await LocalStorageService.setTracks(tracks);
        dispatch(privateActionCreators.setNewTracksSuccess());
      } catch (e) {
        dispatch(privateActionCreators.setNewTracksFailure(e.message));
      }
    };
  },
  getTracks() {
    return async (dispatch, getState) => {
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
    return async (dispatch, getState) => {
      const tracks = await LocalStorageService.removeTracks();
      dispatch({ type: actions.DELETE_TRACKS });
    };
  }
};
