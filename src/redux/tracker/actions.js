import * as TrackerService from '../../services/trackerService';
import { stringArrayToObject } from '../../utils/arrayUtils';

export const actions = stringArrayToObject(
  [
    'LOGIN',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'LOGOUT',
    'AUTH_INIT',
    'UPDATE_USER_DATA',
    'SIGNUP',
    'SIGNUP_SUCCESS',
    'SIGNUP_FAILURE',
    'GET_CURRENT_USER',
    'GET_CURRENT_USER_SUCCESS',
    'GET_CURRENT_USER_FAILURE'
  ],
  '@@AUTH'
);

const privateActionCreators = {
  loginSuccess(authData) {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { authData }
    };
  },
  loginFailure(err) {
    return {
      type: actions.LOGIN_FAILURE,
      payload: { err }
    };
  },
  getCurrentUserSuccess(authData) {
    return {
      type: actions.GET_CURRENT_USER_SUCCESS,
      payload: { authData }
    };
  },
  getCurrentUserFailure(err) {
    return {
      type: actions.GET_CURRENT_USER_FAILURE,
      payload: { err }
    };
  },
  signupSuccess() {
    return {
      type: actions.SIGNUP_SUCCESS
    };
  },
  signupFailure(err) {
    return {
      type: actions.SIGNUP_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  init(user) {
    return {
      type: actions.AUTH_INIT,
      payload: { user }
    };
  },
  login(authData, navigationAction) {
    return async dispatch => {
      dispatch({ type: actions.LOGIN });
      try {
        const response = await TrackerService.login(authData);
        if (response.ok) {
          await TrackerService.setCurrentUser(response.data);
          dispatch(privateActionCreators.loginSuccess(response.data));
          navigationAction();
        } else {
          throw new Error();
        }
      } catch (e) {
        dispatch(privateActionCreators.loginFailure(e.message));
      }
    };
  },
  signup(authData, navigationAction) {
    return async dispatch => {
      dispatch({ type: actions.SIGNUP });
      try {
        const response = await TrackerService.signup(authData);
        if (response.ok) {
          dispatch(privateActionCreators.signupSuccess(response.data));
          navigationAction();
        } else {
          throw new Error();
        }
      } catch (e) {
        dispatch(privateActionCreators.signupFailure(e.message));
      }
    };
  },
  getCurrentUser(id) {
    return async dispatch => {
      dispatch({ type: actions.GET_CURRENT_USER });
      try {
        const response = await TrackerService.getCurrentUser(id);
        if (response.ok) {
          dispatch(privateActionCreators.getCurrentUserSuccess(response.data.data));
        } else {
          throw new Error();
        }
      } catch (e) {
        dispatch(privateActionCreators.getCurrentUserFailure(e.message));
      }
    };
  },
  logout(action) {
    return async dispatch => {
      dispatch({ type: actions.LOGOUT });
      action();
      await TrackerService.removeCurrentUser();
    };
  },
  updateUserData(data) {
    return {
      type: actions.UPDATE_USER_DATA,
      payload: { data }
    };
  }
};
