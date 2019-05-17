import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  loading: false,
  tracks: []
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.UPDATE_TRACKS: {
      return state.merge({ initialLoading: false });
    }
    case actions.UPDATE_TRACKS_SUCCESS: {
      return state.merge({ loading: false, tracks: action.payload.track });
    }
    case actions.UPDATE_TRACKS_FAILURE: {
      return state.merge({ loading: false, err: action.payload.err });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
