import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  tracks: []
};

export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.DELETE_TRACKS: {
      return state.merge({ tracks: [] });
    }
    case actions.SET_NEW_TRACK_SUCCESS:
    case actions.GET_TRACK_SUCCESS: {
      return state.merge({ tracks: action.payload });
    }
    case actions.SET_NEW_TRACK_FAILURE:
    case actions.GET_TRACK_FAILURE: {
      return state.merge({ err: action.payload.err });
    }
    default: {
      return state;
    }
  }
}
