import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';

export default Reactotron.configure()
  .use(reactotronRedux())
  .use(tronsauce())
  .useReactNative({ asyncStorage: true })
  .connect();
