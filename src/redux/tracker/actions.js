import * as TrackerService from '../../services/trackerService';
import { stringArrayToObject } from '../../utils/arrayUtils';

export const actions = stringArrayToObject(
  [
    'UPDATE_TRACKS',
    'UPDATE_TRACKS_SUCCESS',
    'UPDATE_TRACKS_FAILURE'
  ],
  '@@TRACKS'
);

const privateActionCreators = {
  updateTacksSuccess() {
    return {
      type: actions.UPDATE_TRACKS_SUCCESS
    };
  },
  updateTacksFailure(err) {
    return {
      type: actions.UPDATE_TRACKS_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  updateTracks() {
    return async dispatch => {
      dispatch({ type: actions.UPDATE_TRACKS });
      try {
        // const response = await TrackerService.login(authData);
        // if (response.ok) {
        //   await TrackerService.setCurrentUser(response.data);
        //   dispatch(privateActionCreators.loginSuccess(response.data));
        //   navigationAction();
        // } else {
        //   throw new Error();
        // }
      } catch (e) {
        dispatch(privateActionCreators.updateTacksFailure(e.message));
      }
    };
  }
};
