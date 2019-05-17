import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true,
  err: null,
  signupErr: null
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.AUTH_INIT: {
      return state.merge({ initialLoading: false, currentUser: action.payload.user });
    }
    case actions.SIGNUP:
    case actions.GET_CURRENT_USER:
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.GET_CURRENT_USER_SUCCESS:
    case actions.LOGIN_SUCCESS: {
      return state.merge({ loading: false, currentUser: action.payload.authData.user, err: null });
    }
    case actions.GET_CURRENT_USER_FAILURE: {
      return state.merge({ loading: false });
    }
    case actions.SIGNUP_SUCCESS: {
      return state.merge({ loading: false, signupErr: null });
    }
    case actions.SIGNUP_FAILURE: {
      return state.merge({ loading: false, signupErr: action.payload.err });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({ loading: false, currentUser: null, err: action.payload.err });
    }
    case actions.LOGOUT: {
      return state.merge(defaultState);
    }
    case actions.UPDATE_USER_DATA: {
      return state.merge({ currentUser: { ...state.currentUser, ...action.payload.data } });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
