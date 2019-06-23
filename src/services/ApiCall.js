import Reactotron from 'reactotron-react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { create } from 'apisauce';
import Config from 'react-native-config';

const baseURL = Config.API_BASE_URL;

const api = create({
  baseURL,
  timeout: 12000
});

api.addMonitor(Reactotron.apisauce);

export const apiSetup = dispatch => {
  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      dispatch(ToastActionsCreators.displayError('Error de conexión, verifique su conexión a internet'));
    }
  });
};

export const getFrames = async (TrackNumber = 0) => api.get('/frames', { lastTrack: TrackNumber });

export const setFrame = async frame => api.post('/frames', frame);

export default api;
